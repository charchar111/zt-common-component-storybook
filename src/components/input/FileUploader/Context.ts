import { createContext } from "react";
import { IFileUploderContext } from "./type";

export const FileUploderContext = createContext<IFileUploderContext>({
  fileList: null,
  fileWithMetadataList: [],
  loading: {
    fileWithMetadataList: false,
  },
  onChange: undefined,
  onClick: undefined,
  onDropForReactDropzone: undefined,
  updateFileList: undefined,
  reset: undefined,
  deleteFileList: undefined,
  ref: { inputHub: undefined },
});
