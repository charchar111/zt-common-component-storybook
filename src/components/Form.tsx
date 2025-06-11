import React, { useEffect, useRef } from "react";

import {
  checkAllowExtensionToFiles,
  checkOverMaxSizeToFiles,
} from "./input/FileUploader/util/util";
import FileUploader from "./input/FileUploader/FileUploader";
import icoUploadFileUrl from "../assets/images/ico_upload_file.svg";
import { useFileForm } from "./input/FileUploader/Wrapper/hook";
import { useFileController } from "./input/FileUploader/Controller/hook";

export default function Form() {
  const fileForm = useFileForm();
  const fileController = useFileController();
  console.log("form", fileController);
  const maxLengthFile = 5;

  // 500mb
  const maxByte = 524288000;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = function (e) {
    e.preventDefault();

    // 로딩중
    if (fileForm.current.loading.fileWithMetadataList) return;

    //유효성 검사 - 파일 개수, 확장자, 사이즈

    if (maxLengthFile < fileForm.current.fileWithMetadataList.length) {
      console.log("파일 개수 오버");
      return;
    }

    if (
      checkOverMaxSizeToFiles(fileForm.current.fileWithMetadataList, maxByte)
    ) {
      console.log("파일 사이즈 오버");
      return;
    }

    if (!checkAllowExtensionToFiles(fileForm.current.fileWithMetadataList)) {
      console.log("파일 형식 오버");
      return;
    }

    console.log("유효성 검사 통과");
    console.log(fileForm);
  };
  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <FileUploader.Wrapper fileForm={fileForm} fileController={fileController}>
        <FileUploader.Layout.Container>
          <FileUploader.Upload.DropZone uniqueKey="upload-dropZone1">
            <p>
              첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을
              직접 선택해주세요.
            </p>
            <FileUploader.Upload.ButtonAndInput.File
              uniqueKey="upload-file1"
              multiple={true}
              className=""
            >
              <span>파일 선택</span>
            </FileUploader.Upload.ButtonAndInput.File>
            <FileUploader.Upload.ButtonAndInput.Folder
              uniqueKey="upload-folder1"
              multiple={true}
              className=""
            >
              <img src={icoUploadFileUrl} alt="" />
              <span>폴더 선택</span>
            </FileUploader.Upload.ButtonAndInput.Folder>
          </FileUploader.Upload.DropZone>

          <FileUploader.Controller>
            {({ reset, fileWithMetadataList }) => {
              return (
                <FileUploader.Template.Options
                  reset={reset}
                  fileWithMetadataList={fileWithMetadataList}
                  maxLengthFile={maxLengthFile}
                ></FileUploader.Template.Options>
              );
            }}
          </FileUploader.Controller>

          <FileUploader.Controller>
            {({ deleteFileList, fileWithMetadataList }) => {
              return !fileWithMetadataList ? null : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {Array.from(fileWithMetadataList).map((el, idx) => (
                    <FileUploader.Template.FileStack
                      key={idx}
                      file={el}
                      onDelete={deleteFileList}
                    />
                  ))}
                </div>
              );
            }}
          </FileUploader.Controller>
        </FileUploader.Layout.Container>
      </FileUploader.Wrapper>
      <button>업로드</button>
    </form>
  );
}
