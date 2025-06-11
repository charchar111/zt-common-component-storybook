import { PropsWithChildren, useRef, useEffect } from "react";
import {
  IFileUploderContext,
  IusefileFormValue,
  onChangeEventHandler,
  onClickEventHandler,
} from "../type";
import { FileUploderContext } from "../Context";
import { IUseFileController } from "../Controller/type";
import { useCreateFileHub, useExtractFileMetaData } from "./hook";

// 새 파일리스트 생성
function createDataTransfer(argFiles: FileList | File[]) {
  const files = Array.isArray(argFiles) ? argFiles : Array.from(argFiles);

  return files.reduce((acc, curVal) => {
    acc.items.add(curVal);
    return acc;
  }, new DataTransfer());
}

//  각 파일 인풋들과 파일 상태를 동기화
const setFileListStateAndFileInputs = {
  // 두 파일 리스트를 하나로 합쳐서 새로운 값 반환
  merge: (newDataTransfer: DataTransfer, oldFileList: FileList | null) => {
    return createDataTransfer([
      ...(!oldFileList ? [] : oldFileList),
      ...newDataTransfer.files,
    ]);
  },

  // 새로운 data를 context의 state와 각 file input에 동기화
  synchronize: (
    argDataTransfer: DataTransfer,
    argSetFileList: React.Dispatch<React.SetStateAction<FileList>>,
    argInputs: (HTMLInputElement | null)[]
  ) => {
    // state에 동기화
    argSetFileList(() => {
      return argDataTransfer.files;
    });

    // ref에 동기화
    argInputs.forEach((el) => {
      if (!el) return;
      el.files = argDataTransfer.files;
    });
  },
};

/**
 * @description 공유하는 상태 설정 및 초기화 역할.
 *
 * 해당 컴포넌트의 모든 하위 컴포넌트는 반드시 Wrapper의 children이어야 함.
 *
 * state 변경에 따른 리렌더링은 Wrapper의 안에서 일어남
 */
const Wrapper = function ({
  children,
  fileForm,
  fileController,
}: PropsWithChildren<{
  fileForm: React.MutableRefObject<IusefileFormValue>;
  fileController?: IUseFileController;
}>) {
  // 파일 리스트가 모이는 허브
  const {
    fileList,
    setFileList,
    fileWithMetadataList,
    setFileWithMetadataList,
    fileWithMetadataListLoading,
    setFileWithMetadataListLoading,
  } = useCreateFileHub(fileController);

  // 파일 리스트에서 메타 데이터 추출 등의 비동기 작업
  useExtractFileMetaData({
    fileList,
    setFileWithMetadataListLoading,
    setFileWithMetadataList,
  });

  // wrapper 내에 모든 file input을 관리
  const inputHubRef = useRef<{
    [key: string]: HTMLInputElement | null;
  }>({});

  //  filer input으로 받은 fileList를 파일 상태에 추가
  const handleChange: onChangeEventHandler = (e, argOnChange) => {
    // console.log("inputHubRef", inputHubRef.current);

    const files = e.target.files;

    if (!files) return;
    const dataTransfer = createDataTransfer(files);
    const mergeFileList = setFileListStateAndFileInputs.merge(
      dataTransfer,
      fileList
    );

    setFileListStateAndFileInputs.synchronize(
      mergeFileList,
      setFileList,
      Object.values(inputHubRef.current)
    );

    if (argOnChange) argOnChange(e); // 외부에서 전달된 onChange 호출
  };

  const handleClick: onClickEventHandler = (_, argRef) => {
    if (argRef?.current) argRef.current.click();
  };

  const handleDropForReactDropzone: IFileUploderContext["onDropForReactDropzone"] =
    (acceptedFiles, fileRejections, event) => {
      const dataTransfer = createDataTransfer(acceptedFiles);
      const mergeFileList = setFileListStateAndFileInputs.merge(
        dataTransfer,
        fileList
      );

      setFileListStateAndFileInputs.synchronize(
        mergeFileList,
        setFileList,
        Object.values(inputHubRef.current)
      );
    };

  // 인자로 들어온 파일리스트로 상태를 갱신
  const updateFileList = function (argNewFileList: File | File[]) {
    const newFileList = Array.isArray(argNewFileList)
      ? argNewFileList
      : [argNewFileList];

    const dataTransfer = createDataTransfer(newFileList);

    setFileListStateAndFileInputs.synchronize(
      dataTransfer,
      setFileList,
      Object.values(inputHubRef.current)
    );
  };
  // 인자로 들어온 파일 혹은 파일 배열을 파일 상태에서 삭제(필터링)
  const deleteFileList = function (argNewFileList: File | File[] | undefined) {
    if (!argNewFileList) return;

    const newFileList = (() => {
      const deleteTargets = Array.isArray(argNewFileList)
        ? argNewFileList
        : [argNewFileList];
      return Array.from(fileList).filter(
        (fileListEl) =>
          !deleteTargets.some((deleteTargetEl) => deleteTargetEl === fileListEl)
      );
    })();

    const dataTransfer = createDataTransfer(newFileList);

    setFileListStateAndFileInputs.synchronize(
      dataTransfer,
      setFileList,
      Object.values(inputHubRef.current)
    );
  };

  //  업로드된 파일리스트를 0으로 리셋
  const handleResetFileList = function () {
    const emptyDataTransfer = createDataTransfer([]);

    setFileList(emptyDataTransfer.files);
    Object.values(inputHubRef.current).forEach((el) => {
      if (!el) return;
      el.files = emptyDataTransfer.files;
    });
  };

  // 외부에서 주입한 fileForm 객체에 연결
  fileForm.current.fileList = fileList;
  fileForm.current.length = fileList?.length;
  fileForm.current.fileWithMetadataList = fileWithMetadataList;
  fileForm.current.reset = handleResetFileList;

  // 외부에서 주입한 fileController 객체에 연결
  useEffect(() => {
    if (!fileController) return;
    fileController.utilRef.current.reset = handleResetFileList;
    fileController.utilRef.current.deleteFileList = deleteFileList;
    fileController.utilRef.current.updateFileList = updateFileList;
  }, []);

  return (
    <FileUploderContext.Provider
      // 추가되면, dropzone의 useCallback에 넣어주세요
      value={{
        fileList,
        fileWithMetadataList,
        loading: {
          fileWithMetadataList: fileWithMetadataListLoading,
        },
        onChange: handleChange,
        onClick: handleClick,
        onDropForReactDropzone: handleDropForReactDropzone,
        reset: handleResetFileList,
        deleteFileList,
        updateFileList,
        ref: { inputHub: inputHubRef },
      }}
    >
      {children}
    </FileUploderContext.Provider>
  );
};

export default Wrapper;
