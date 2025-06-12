/**
 * 브라우저 내장 다운로드 관리자를 사용한 파일 다운로드 요청
 * @param {object} [arg]
 * @param {string} [arg.url]
 * @param {object} [arg.param]
 * @param {object} [arg.body]
 * @param {'GET' | 'POST'} [arg.method]
 * @param {FormEncType} [arg.enctype]
 */
export const useFileDownloadAsBrowserStream = (arg) => {
  /**
   * 외곽 함수의 인자를 오버라이드
   * @param {object} [arg2]
   * @param {string} [arg2.url]
   * @param {object} [arg2.param]
   * @param {object} [arg2.body]
   * @param {'GET' | 'POST'} [arg2.method]
   * @param {FormEncType} [arg2.enctype]
   * @param {string | undefined} [arg2.download]
   */
  return function fileDownloadAsBrowserStream(arg2) {
    /**
     * arg를 오버라이드
     * @type {{
     * url: string,
     * param: {[key:string]:string | undefined} | undefined,
     * body: {[key:string]:string | undefined} | undefined,
     * method: 'GET' | 'POST',
     * enctype: FormEncType | undefined,
     * download: string | undefined
     * }}
     */
    // @ts-ignore
    const { url, param, body, method, enctype, download } = {
      ...arg,
      ...arg2,
    };

    if (!url || !method) throw new Error("url, method 는 필수값 입니다.");

    switch (method) {
      case "GET": {
        // 만약 동시에 여러 번 요청할 때 아래처럼 최근 요청이 취소된다면, 아래 로직을 참고하여 iframe을 추가해보세요.(될진 모르지만 다른 대안이 없을 거에요)
        const a = document.createElement("a");
        const aUrlParam =
          param === null || typeof param !== "object"
            ? ""
            : "?" + new URLSearchParams(param).toString(); // GET 방식으로 전달할 파라미터
        a.href = url + aUrlParam;
        a.style.display = "none";
        a.download = download; // 파일 이름 설정
        document.body.appendChild(a);
        a.click();
        setTimeout(() => document.body.removeChild(a), 1000);
        break;
      }

      case "POST": {
        // iframe 안쓰면 동시에 여러 개 요청 시, 브라우저가 최근 요청을 제외한 이전 요청을 취소해버림
        // post 제출을 중복으로 못하도록 브라우저 최적화 뭔가가 있는 듯
        // firefox는 iframe을 써도 간헐적으로 다운로드 오류 가능성 - 재다운 하면 되긴 함
        {
          const iframe = document.createElement("iframe");
          iframe.src = "about:blank"; // 빈 페이지 로드
          iframe.style.display = "none";
          document.body.appendChild(iframe);

          const form = document.createElement("form");
          form.style.display = "none";
          form.method = method;
          form.enctype = enctype || "application/x-www-form-urlencoded";
          form.action = url; // POST 방식으로 전달할 파라미터

          // 숨겨진 input들 추가
          body &&
            (() => {
              const inputList = Object.entries({
                ...body,
              }).map(([key, value]) => {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = value;
                return input;
              });

              form.append(...inputList);
            })();

          // 폼을 iframe에 추가하고 제출
          iframe.contentWindow.document.body.appendChild(form);
          form.submit();
          setTimeout(() => document.body.removeChild(iframe), 1000);
        }

        break;
      }
      default:
        throw new Error(
          "지원하지 않는 method 입니다. method는 GET, POST 만 가능합니다."
        );
    }

    return;
  };
};
