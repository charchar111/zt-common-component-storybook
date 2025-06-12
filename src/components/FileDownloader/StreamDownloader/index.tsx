import { createWriteStream } from "streamsaver";

// const backendDomain = "127.0.0.1:5000";
const backendDomain = "localhost:5000";

function handleDownloadFetchOld() {
  console.log("다운로드 시작");

  fetch(`${window.location.protocol}//${backendDomain}/download`)
    .then((res) => {
      let fileName = "default.mp4"; // 기본 파일 이름 설정

      // Content-Disposition 헤더에서 파일 이름 추출
      const disposition = res.headers.get("Content-Disposition");

      console.log("disposition", disposition);
      if (disposition && disposition.indexOf("attachment") !== -1) {
        const fileNameMatch = disposition.match(/filename="(.+)"/);
        if (fileNameMatch && fileNameMatch[1]) {
          fileName = fileNameMatch[1]; // 파일 이름 업데이트
        }
      }

      return res.blob().then((blob) => ({ fileName, blob }));
    })
    .then((res) => {
      const url = URL.createObjectURL(res.blob);

      console.log("url", url);

      // 다운로드를 위한 임시 링크를 생성
      const a = document.createElement("a");
      a.href = url;
      a.download = res.fileName || "default.mp4";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a); // 다운로드 후 링크 제거
      URL.revokeObjectURL(url);
    });
}
function handleDownload() {
  fetch(`${window.location.protocol}//${backendDomain}/download`)
    .then((response) => {
      const reader = response.body?.getReader();
      const writer = createWriteStream("large-file.zip"); // 스트리밍 다운로드를 위한 writer
      const writerStream = writer.getWriter();

      function push() {
        if (!reader) {
          console.error("Response body is undefined, cannot get reader.");
          writerStream.abort();
          return;
        }
        reader
          .read()
          .then(({ done, value }) => {
            if (done) {
              writerStream.close();
              return;
            }
            writerStream.write(value); // 받은 데이터를 바로 writer로 보냄
            push(); // 계속해서 데이터를 읽고 처리
          })
          .catch((err) => {
            console.error("스트리밍 오류:", err);
            writerStream.abort();
          });
      }

      push(); // 스트리밍 시작
    })
    .catch((error) => console.error("파일 다운로드 오류:", error));
}
function StreamDownloader() {
  return (
    <div>
      <h3>다운로드 파일</h3>
      <p>
        테스트 성공 : 다운로드 클릭 하자마자 미디어 파일 다운로드가 브라우저
        기본 다운로더에 표출
      </p>

      <button onClick={handleDownloadFetchOld}>기본 다운로드</button>
      <button onClick={handleDownload}>스트리밍 방식 다운로드</button>
    </div>
  );
}

export default StreamDownloader;
