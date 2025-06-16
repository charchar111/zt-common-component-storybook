import type { Meta, StoryObj } from "@storybook/react-vite";
import Basic from "./examples/Basic";

/**
 * 공용 모듈: 모달
 *
 * 아래 KRDS 파일 업로더 구현 사항을 참조하여 작성되었습니다.
 *
 * https://www.krds.go.kr/html/site/component/component_04_05.html
 *
 * Primary : 파일 업로더의 기본 사용 예시를 보여줍니다.
 *
 */

// 스토리북 메타데이터를 정의합니다.
// 이 메타데이터는 스토리북이 컴포넌트를 렌더링하는 데 사용됩니다.
const meta = {
  title: "모듈/Modal/Controller",
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
export const CancelButton: Story = {
  name: "Cancel button",
  args: {
    id: "my_Cancel1",
    showCancelBtn: true,
  },
};
export const Maximize: Story = {
  name: "Maximize button",

  args: {
    id: "my_Maximize1",

    showMaximizeBtn: true,
  },
};
export const Resize: Story = {
  name: "Resize view",

  args: {
    id: "my_Resize1",
    container: {
      resize: { able: true },
    },
  },
};
export const DragAndDrop: Story = {
  name: "DragAndDrop view",

  args: {
    id: "DragAndDrop",
    title: "헤더를 잡고 드래그 해보세요",
    container: {
      dragAndDrop: { able: true },
    },
  },
};
export const All: Story = {
  args: {
    id: "my_All1",
    container: {
      resize: { able: true },
      dragAndDrop: { able: true },
    },
  },
};
