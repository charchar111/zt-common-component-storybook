import { FileWithMetadata, IFileUploderContext } from "../type";

// // fileinput의 종합정보를 보여줌
export interface IController {
  fileList: FileList | null;
  fileWithMetadataList: IFileUploderContext["fileWithMetadataList"];
  loading: IFileUploderContext["loading"];
  reset: (() => void) | undefined;
  updateFileList: IFileUploderContext["updateFileList"];
  deleteFileList: IFileUploderContext["deleteFileList"];
}

// useFileController전용
export interface IUseFileController extends IController {
  setFileList: React.Dispatch<React.SetStateAction<FileList>>;
  setFileWithMetadataList: React.Dispatch<
    React.SetStateAction<FileWithMetadata[]>
  >;
  setFileWithMetadataListLoading: React.Dispatch<React.SetStateAction<boolean>>;
  utilRef: React.MutableRefObject<{
    reset: (() => void) | undefined;
    updateFileList: IFileUploderContext["updateFileList"];
    deleteFileList: IFileUploderContext["deleteFileList"];
  }>;
}
