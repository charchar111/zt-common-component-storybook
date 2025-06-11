import { useContext } from "react";
import { FileUploderContext } from "../Context";
import { IController } from "./type";

const Controller = function ({
  children,
}: {
  children: (controller: IController) => React.ReactNode | null;
}) {
  const {
    fileList,
    fileWithMetadataList,
    loading,
    reset,
    updateFileList,
    deleteFileList,
  } = useContext(FileUploderContext);

  return children({
    fileList,
    reset,
    loading,
    updateFileList,
    deleteFileList,
    fileWithMetadataList,
  });
};

export default Controller;
