// @ts-check
import React from "react";
import { useFileDownloadAsBrowserStream } from "./hook/useFileDownloadAsBrowserStream";
// 데이터 다운로드

// 이 모듈은 브라우저에서 파일을 다운로드하는 기능을 제공합니다.

export interface BrowserDownloaderRequest {
  method: "GET" | "POST";
  enctype: "application/x-www-form-urlencoded" | "multipart/form-data";
  url: string;
  body?: Record<string, string | number | boolean>;
  parameters?: Record<string, string | number | boolean>;
}

export interface BrowserDownloaderProps {
  requests: BrowserDownloaderRequest[];
  label: string;
}

export default function BrowserDownloader({
  requests,
  label,
}: BrowserDownloaderProps) {
  const defaultArgs = {
    url: requests?.[0]?.url,
    method: requests?.[0]?.method || "GET",
    enctype: requests?.[0]?.enctype,
  };

  const fileDownloadAsBrowserStream = useFileDownloadAsBrowserStream({
    url: defaultArgs.url,
    method: defaultArgs.method,
    enctype: defaultArgs.enctype,
  });

  // SHP파일 다운로드
  return (
    <div>
      <button
        className="download_button"
        onClick={() => {
          // 복수 요청
          // 주의 사항 : 반복 루프를 하며 훅을 호출하는 경우,
          // 아래처럼 루프 간에 텀을 두세요.
          // 그렇지 않으면 요청이 간헐적으로 취소됩니다.
          // 이건 브라우저 관련 문제가 해결이 어렵습니다.
          (async function downloadFileSequentially() {
            for (const requestEl of requests) {
              fileDownloadAsBrowserStream({
                body: requestEl?.body,
                url: requestEl?.url,
                method: requestEl?.method,
                enctype: requestEl?.enctype,
                parameters: requestEl?.parameters,
              });
              await new Promise((resolve) => setTimeout(resolve, 600));
            }
          })();

          return;
        }}
      >
        <span>{label} </span>
      </button>
    </div>
  );
}
