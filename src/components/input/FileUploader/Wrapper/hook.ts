import { useEffect, useMemo, useRef, useState } from "react";
import {
  FileWithMetadata,
  IFileUploderContext,
  IusefileFormValue,
} from "../type";
import { IUseFileController } from "../Controller/type";
import { checkFileExtension } from "../util/util";

/**
 * @description 해당 컴포넌트 기능에 사용되는 주요 상태들을 외부에서 사용하기 위한 훅
 *
 */

export const useFileForm = function () {
  const model = useRef<IusefileFormValue>({
    length: undefined,
    fileList: null,
    fileWithMetadataList: [],
    loading: {
      fileWithMetadataList: false,
    },
    reset: undefined,
  });

  return model;
};

// Wraper에서 파일리스트 상태를 최초 초기화
// 외부에서 state를 인자로 넘기면 해당 state를 사용함
export const useCreateFileHub = (externalState?: IUseFileController) => {
  const [innerFileList, setInnerFileList] = useState<FileList>(
    new DataTransfer().files
  );
  const [fileList, setFileList] = (() => {
    if (externalState?.fileList && externalState?.setFileList)
      return [externalState.fileList, externalState.setFileList];
    else return [innerFileList, setInnerFileList];
  })();

  const [innerFileWithMetadataList, setInnerFileWithMetadataList] = useState<
    IFileUploderContext["fileWithMetadataList"]
  >([]);

  const [fileWithMetadataList, setFileWithMetadataList] = (() => {
    if (
      externalState?.fileWithMetadataList &&
      externalState?.setFileWithMetadataList
    )
      return [
        externalState?.fileWithMetadataList,
        externalState.setFileWithMetadataList,
      ];
    else return [innerFileWithMetadataList, setInnerFileWithMetadataList];
  })();

  const [
    innerFileWithMetadataListLoading,
    setInnerFileWithMetadataListLoading,
  ] = useState<boolean>(false);

  const [fileWithMetadataListLoading, setFileWithMetadataListLoading] = (() => {
    if (
      externalState?.loading?.fileWithMetadataList &&
      externalState?.setFileWithMetadataListLoading
    )
      return [
        externalState?.loading?.fileWithMetadataList,
        externalState.setFileWithMetadataListLoading,
      ];
    else
      return [
        innerFileWithMetadataListLoading,
        setInnerFileWithMetadataListLoading,
      ];
  })();

  return useMemo(
    () => ({
      fileList,
      setFileList,
      fileWithMetadataList,
      setFileWithMetadataList,
      fileWithMetadataListLoading,
      setFileWithMetadataListLoading,
    }),
    [fileList, fileWithMetadataList, fileWithMetadataListLoading]
  );
};

// file
export const useExtractFileMetaData = ({
  fileList,
  setFileWithMetadataListLoading,
  setFileWithMetadataList,
}: {
  fileList: FileList;
  setFileWithMetadataListLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setFileWithMetadataList: React.Dispatch<
    React.SetStateAction<FileWithMetadata[]>
  >;
}) => {
  useEffect(() => {
    (async () => {
      setFileWithMetadataListLoading(true);

      const process = Array.from(fileList).map(async (el, idx) => {
        const type = await checkFileExtension(el);
        return {
          index: idx,
          ready: true,
          file: el,
          metadata: {
            extension: type?.ext,
            mimeType: type?.mime,
          },
        };
      });
      const formatFile = await (async () => {
        const file: FileWithMetadata[] = Array.from({
          length: fileList.length,
        });
        await Promise.allSettled(process).then((results) =>
          results.forEach(
            (result: {
              status: "fulfilled" | "rejected";
              reason?: string;
              value?: FileWithMetadata;
            }) => {
              switch (result.status) {
                case "fulfilled": {
                  if (!result.value) break;
                  file[result.value.index] = result.value;
                  break;
                }
                case "rejected": {
                  break;
                }
                default: {
                  console.error("예상치 못한 status를 받음", result.status);
                }
              }
            }
          )
        );

        return file;
      })();
      setFileWithMetadataList(formatFile);
      setFileWithMetadataListLoading(false);
    })();
  }, [fileList]);
};
