import {
  forwardRef,
  PropsWithChildren,
  useRef,
  useImperativeHandle,
  useContext,
} from "react";
import { ButtonAndFileInputProps } from "../../type";
import { FileUploderContext } from "../../Context";
import { connectRefObject } from "../../util/util";

/**
 * @description 파일 업로드용 버튼
 *
 * unique키 꼭 필요. uplodaer 간에 겹치면 안됨
 */
const FolderButton = forwardRef<
  null | HTMLInputElement,
  PropsWithChildren<ButtonAndFileInputProps>
>(function (
  {
    uniqueKey,
    className,
    style,
    children,
    onClick: propsOnClick,
    onChange: propsOnChange,
    ...rest
  },
  ref
) {
  if (typeof uniqueKey !== "string")
    throw new Error(
      "해당 컴포넌트는 props로 string 타입의 uniqueKey가 필요합니다"
    );

  const inputRef = useRef<HTMLInputElement | null>(null);
  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    ref,
    () => inputRef?.current,
    []
  );
  const {
    onClick,
    onChange,
    ref: { inputHub: inputHubRef },
  } = useContext(FileUploderContext);

  return (
    <>
      <button
        type="button"
        className={`at_fileUploader__search-file-button ${className || ""}`}
        style={{ ...style }}
        onClick={
          !onClick
            ? undefined
            : (e) => {
                if (propsOnClick) propsOnClick(e);
                onClick(e, inputRef);
              }
        }
      >
        {children}
      </button>

      <input
        ref={(el) => {
          // 수동으로 webkitdirectory 세팅
          if (el) el.webkitdirectory = true;

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
    </>
  );
});

export default FolderButton;
