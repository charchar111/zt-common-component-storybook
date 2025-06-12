import BrowserDownloader from "@/components/FileDownloader/BrowserDownloader";
import StreamDownloader from "@/components/FileDownloader/StreamDownloader";
import { Form as FileUploaderForm } from "@/components/input/FileUploader";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * 공용 모듈: 파일 다운로더
 *
 * 파일 다운로드 시, 브라우저의 기본 다운로드 기능을 사용하여 파일을 저장할 수 있는 모듈입니다.
 *
 * 다운로드 현황 표시, 일시중지, 재개 등의 기능을 제공합니다.
 *
 * 다운로드에 대한 콜백 기능은 제공하지 않으며, 브라우저 api의 한계로 구현 불가합니다.
 *
 * BrowserDownloader : 파일 다운로더의 기본 사용 예시를 보여줍니다.
 *
 * <br/>
 * <h2>테스트 전 주의사항</h2>
 *
 *  <strong>다운로드 테스트를 위한 백엔드 서버를 깨워줘야 합니다.(평소에는 비용 문제로 꺼져 있습니다.) </strong>
 *
 * 아래 링크로 한번 접속해주세요. hello world가 보이면 정상입니다.
 *
 * <a href="https://zt-api-for-common.onrender.com/">https://zt-api-for-common.onrender.com/ </a>
 *
 * <br/>
 * <hr/>
 *
 * 의존성
 * 이 모듈의 의존성은 다음과 같습니다.
 *
 * 기본
 * ```
 * npm install streamsave
 * ```
 *
 * 버전 명시 - 위 명령어가 버전 오류가 뜨는 경우 사용하세요
 * ```
 * npm install streamsaver@^2.0.6
 * ```
 */

// 스토리북 메타데이터를 정의합니다.
// 이 메타데이터는 스토리북이 컴포넌트를 렌더링하는 데 사용됩니다.
const meta = {
  title: "모듈/FileDownloader/StreamDownloader(미완성)",
  component: StreamDownloader,
  parameters: {
    // 컴포넌트가 렌더링되는 캔버스 내 레이아웃을 중앙으로 설정
    layout: "centered",
  },
  // props 기반 자동 문서화를 활성화
  tags: ["autodocs"],
} satisfies Meta<typeof StreamDownloader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const streamDownloader: Story = {};
