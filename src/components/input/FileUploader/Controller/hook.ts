import React, { useMemo, useRef, useState } from "react";
import { IUseFileController } from "./type";
import { IFileUploderContext } from "../type";

// 전역에서 fileList 상태 참조 및 dispatch 용
export const useFileController = function () {
  const [fileList, setFileList] = useState<FileList>(new DataTransfer().files);
  const [fileWithMetadataList, setFileWithMetadataList] = useState<
    IFileUploderContext["fileWithMetadataList"]
  >([]);

  const [fileWithMetadataListLoading, setFileWithMetadataListLoading] =
    useState<boolean>(false);

  const utilRef = useRef<{
    reset: (() => void) | undefined;
    updateFileList: IFileUploderContext["updateFileList"];
    deleteFileList: IFileUploderContext["deleteFileList"];
  }>({
    reset: undefined,
    updateFileList: undefined,
    deleteFileList: undefined,
  });

  return useMemo<IUseFileController>(
    () => ({
      fileList,
      fileWithMetadataList,
      loading: {
        fileWithMetadataList: fileWithMetadataListLoading,
      },
      reset: utilRef.current.reset,
      updateFileList: utilRef.current.updateFileList,
      deleteFileList: utilRef.current.deleteFileList,
      setFileList,
      setFileWithMetadataList,
      setFileWithMetadataListLoading,
      utilRef,
    }),
    [fileList, fileWithMetadataList, fileWithMetadataListLoading]
  );
};
