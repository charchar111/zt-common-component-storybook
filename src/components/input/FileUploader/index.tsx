// index 파일은 컴포넌트의 노출 지점을 정의합니다.
// 컴포넌트 외부에서 사용할 것들을 여기 정의해주세요

// 원칙 상, 경로는 ./로 시작해야 합니다.(내부에 있는 것만 가져오기 위함)
import DropZone from "./Uploader/DropZone";
import Wrapper from "./Wrapper/Wrapper";
import FileButton from "./Uploader/ButtonAndInput/FileButton";
import Container from "./Layout/Container";

import FolderButton from "./Uploader/ButtonAndInput/FolderButton";
import Options from "./Template/Options";
import Controller from "./Controller/Controller";
import FileStack from "./Template/FileStacks";

// 높은 추상화 수준의 템플릿
export const FileUploader = {
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

// 정적 파일
// 아이콘
export { default as icoUploadFileUrl } from "./assets/images/ico_upload_file.svg";
export { default as icoXmarkUrl } from "./assets/images/ico_xmark.svg";

// 사용 예시
export { default as Form } from "./example/Form";
