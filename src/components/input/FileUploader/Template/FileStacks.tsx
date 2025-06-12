import "../style/FileUploaderStyle.scss";
import { FileWithMetadata, IFileUploderContext } from "../type";

import { allowExtension } from "../constant";
import { formatByte } from "../util/util";
import { icoXmarkUrl } from "..";
interface FileStacksProps {
  file: File | FileWithMetadata;
  onDelete: IFileUploderContext["deleteFileList"];
}

export default function FileStack({ file, onDelete }: FileStacksProps) {
  // @ts-ignore
  const fileData: File = file?.file ? file.file : file;

  // @ts-ignore
  const metadata: FileWithMetadata["metadata"] = file?.metadata;

  const isAllowExtension = !metadata?.extension
    ? false
    : allowExtension.includes(metadata.extension);

  const valid = isAllowExtension;
  return (
    <div className={`mo_fileUploader__fileStacks ${valid ? "" : "error"}`}>
      <div className="filestack__header">
        <div className="info">
          <p className="title">{fileData.name}</p>
          <p>{`[${metadata.extension || fileData.type},  ${formatByte(
            fileData.size
          )}]`}</p>
        </div>
        <div className="button-box">
          {valid ? null : (
            <div className="ico-invalid error-icon">
              <span>
                !<em className="sr-only">에러</em>
              </span>
            </div>
          )}
          <button
            type="button"
            className="delete-button"
            onClick={() => onDelete && onDelete(fileData)}
          >
            <img src={icoXmarkUrl} alt="" />
            <span>삭제</span>
          </button>
        </div>
      </div>

      {valid ? null : (
        <div className={`filestack__body ${isAllowExtension ? "" : "error"}`}>
          {isAllowExtension ? null : (
            <p>
              올릴 수 없는 파일 형식입니다.
              <br />
              명시된 형식의 파일만 등록할 수 있습니다.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
