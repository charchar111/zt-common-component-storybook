// @ts-check
import "../style/FileUploaderStyle.scss";
import { FileWithMetadata } from "../type";
import { icoXmarkUrl } from "..";

export default function Options({
  reset,
  fileWithMetadataList,
  maxLengthFile,
}: {
  reset: (() => void) | undefined;
  fileWithMetadataList: FileWithMetadata[];
  maxLengthFile?: number;
}) {
  return (
    <div className="mo_fileuploder_option-container">
      <div className="option__length-indicator">
        {!fileWithMetadataList ? null : (
          <div
            style={{
              color:
                maxLengthFile && maxLengthFile < fileWithMetadataList.length
                  ? "red"
                  : "",
            }}
          >
            <p>
              <span
                style={{
                  color:
                    maxLengthFile && maxLengthFile < fileWithMetadataList.length
                      ? "red"
                      : "blue",
                }}
              >
                {fileWithMetadataList.length}
              </span>
              {!maxLengthFile ? null : <span>{` / ` + maxLengthFile}</span>}
              <span>개</span>
            </p>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={reset}
        className="mo_fileuploder_resetButton"
      >
        <img src={icoXmarkUrl} alt="" />
        <span>전체파일 삭제</span>
      </button>
    </div>
  );
}
