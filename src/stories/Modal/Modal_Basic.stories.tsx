import type { Meta, StoryObj } from "@storybook/react-vite";
import Basic from "./examples/Basic";

/**
 * 공용 모듈: 모달
 *
 *
 * https://www.krds.go.kr/html/site/component/component_04_05.html
 *
 *
 * 의존성
 * 이 모듈의 의존성은 다음과 같습니다.
 *
 * 기본
 * ```
 * npm install styled-components zustand re-resizable @dnd-kit/core @dnd-kit/modifiers @dnd-kit/sortable @emotion/react
 * ```
 *
 * 버전 명시 - 위 명령어가 버전 오류가 뜨는 경우 사용하세요
 * ```
 * npm install styled-components@6.1.11 zustand@5.0.3 re-resizable@6.11.2 @dnd-kit/core@6.3.1 @dnd-kit/modifiers@9.0.0 @dnd-kit/sortable@10.0.0 @emotion/react@11.14.0
 * ```
 */

// 스토리북 메타데이터를 정의합니다.
// 이 메타데이터는 스토리북이 컴포넌트를 렌더링하는 데 사용됩니다.
const meta = {
  title: "Components/Modal/Basic",
  component: Basic,
  parameters: {
    // 컴포넌트가 렌더링되는 캔버스 내 레이아웃을 중앙으로 설정
    layout: "centered",
  },

  // props 기반 자동 문서화를 활성화
  // tags: ["autodocs"],
} satisfies Meta<typeof Basic>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Alert: Story = {
  args: { id: "my_alarm1", content: "알람 1" },
};

export const Confirm: Story = {
  args: { id: "my_confirm1", footerVariantName: "confirm", content: "확인 1" },
};

export const Prompt: Story = {
  args: {
    id: "my_prompt1",
    footerVariantName: "prompt",
    content: (
      <>
        <p>다음 값을 입력해주세요</p>
        <input type="text" />
      </>
    ),
  },
};

export const Title: Story = {
  args: {
    id: "my_title1",
    title: "모달 제목",
    content: "모달 컨텐츠",
  },
};

export const NoDim: Story = {
  args: {
    id: "my_no_dim",
    dim: {
      active: false,
    },
    content: "dim이 없습니다",
  },
};

export const NoCloseAfterDimClick: Story = {
  args: {
    id: "my_no_close_after_dim_click",
    dim: {
      active: true,
      isCloseOnDimClick: false,
    },
    content: "dim 을 클릭해도 모달이 꺼지지 않습니다.",
  },
};
