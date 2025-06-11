import { DropzoneOptions, useDropzone } from "react-dropzone";
import "../style/FileUploaderStyle.scss";
import {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { ButtonAndFileInputProps } from "../type";
import { FileUploderContext } from "../Context";
import { connectRefObject } from "../util/util";

const DropZone = forwardRef<
  null | HTMLInputElement,
  PropsWithChildren<
    Omit<ButtonAndFileInputProps, "onDrop"> & { activeClick?: boolean } & {
      onDrop?: never;
      onDropCustom?: NonNullable<DropzoneOptions["onDrop"]>;
    }
  >
>(function (
  {
    activeClick = false,
    uniqueKey,
    className,
    style,
    children,
    onClick: propsOnClick,
    onChange: propsOnChange,

    onDrop: propsOnDrop,
    // 라이브러리랑 병합하면서 onDrop 이벤트 타입이 좀 바뀜. 그래서 이렇게 삽입해야 함
    onDropCustom: propsOnDropCustom,
    ...rest
  },
  ref
) {
  if (typeof uniqueKey !== "string")
    throw new Error(
      "해당 컴포넌트는 props로 string 타입의 uniqueKey가 필요합니다"
    );

  if (propsOnDrop)
    throw new Error(
      `해당 컴포넌트는 react-dropzone 라이브러리 적용 과정에서 onDrop을 사용하지 않습니다. 
      대신, customOnDrop  속성에 이벤트 핸들러를 주입해주세요. 
      해당 이벤트의 인자 타입은 다음과 같습니다
       <T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void`
    );

  const inputRef = useRef<HTMLInputElement | null>(null);
  useImperativeHandle<
    HTMLInputElement | null,
    HTMLInputElement | null
  >(ref, () => inputRef?.current, []);

  const {
    fileList,
    onClick,
    onChange,
    onDropForReactDropzone,
    reset,
    deleteFileList,
    updateFileList,
    ref: { inputHub: inputHubRef },
  } = useContext(FileUploderContext);

  //   라이브러리 세팅
  const onDrop: NonNullable<DropzoneOptions["onDrop"]> = useCallback(
    (acceptedFiles, fileRejections, event) => {
      if (onDropForReactDropzone)
        onDropForReactDropzone(acceptedFiles, fileRejections, event);

      if (propsOnDropCustom)
        propsOnDropCustom(acceptedFiles, fileRejections, event);
    },
    [
      fileList,
      onClick,
      onChange,
      onDropForReactDropzone,
      reset,
      deleteFileList,
      updateFileList,
      propsOnDropCustom,
    ]
  );

  const { getRootProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });
  // -- 라이브러리 세팅 --

  return (
    <div
      {...getRootProps({
        className: `mo_fileUploader-dropzone ${className || ""} ${
          isDragActive ? "isDrag" : ""
        }`,
        style: { ...style },
        onClick: !activeClick
          ? undefined
          : !onClick
          ? undefined
          : (e) => {
              if (propsOnClick) propsOnClick(e);
              onClick(e, inputRef);
            },
      })}
    >
      {children}
      <input
        ref={(el) => {
          // 숨겨진 파일 인풋 클릭을 위해 참조 연결
          inputRef.current = el;
          // Wrapper에서 파일 인풋 제어를 위해 참조 연결
          connectRefObject(el, inputHubRef, uniqueKey);
        }}
        onChange={!onChange ? undefined : (e) => onChange(e, propsOnChange)}
        type="file"
        style={{ display: "none" }}
        {...rest}
      />
    </div>
  );
});

export default DropZone;
