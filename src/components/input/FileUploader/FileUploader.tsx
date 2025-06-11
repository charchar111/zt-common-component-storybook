import DropZone from "./Uploader/DropZone";
import Wrapper from "./Wrapper/Wrapper";
import FileButton from "./Uploader/ButtonAndInput/FileButton";
import Container from "./Layout/Container";

import FolderButton from "./Uploader/ButtonAndInput/FolderButton";
import Options from "./Template/Options";
import Controller from "./Controller/Controller";
import FileStack from "./Template/FileStacks";

const FileUploader = {
  Wrapper,
  Template: {
    Options,
    FileStack,
  },
  Layout: { Container },
  Upload: {
    ButtonAndInput: {
      File: FileButton,
      Folder: FolderButton,
    },
    DropZone,
  },
  Controller,
};

export default FileUploader;
