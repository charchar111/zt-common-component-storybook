// FileUploader 컴포넌트용 타입 파일

import { DropzoneOptions } from "react-dropzone";

export type onClickEventHandler = (
  event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>,
  ref: React.MutableRefObject<HTMLInputElement | null>
) => void;

export type onChangeEventHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
) => void;

// @ts-check
export interface IusefileFormValue {
  length: number | undefined;
  fileList: IFileUploderContext["fileList"];
  fileWithMetadataList: IFileUploderContext["fileWithMetadataList"];
  loading: IFileUploderContext["loading"];
  reset: IFileUploderContext["reset"];
}

export type ButtonAndFileInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onClick"
> & {
  uniqueKey: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
};

export interface IFileUploderContext {
  fileList: FileList | null;
  fileWithMetadataList: FileWithMetadata[];
  loading: {
    fileWithMetadataList: boolean;
  };
  onChange: onChangeEventHandler | undefined;
  onClick: onClickEventHandler | undefined;
  // react-dropzone 라이브러리와 통합
  onDropForReactDropzone: NonNullable<DropzoneOptions["onDrop"]> | undefined;
  reset: (() => void) | undefined;
  deleteFileList: ((files: File | File[] | undefined) => void) | undefined;
  updateFileList: ((argNewFileList: File | File[]) => void) | undefined;
  ref: {
    inputHub:
      | React.MutableRefObject<{
          [key: string]: HTMLInputElement | null;
        }>
      | undefined;
  };
}

export interface FileWithMetadata {
  index: number;
  ready: boolean;
  file: File;
  metadata: {
    extension: string | undefined;
    mimeType: string | undefined;
  };
}
