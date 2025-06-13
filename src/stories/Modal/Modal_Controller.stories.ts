import type { Meta, StoryObj } from "@storybook/react-vite";
import Controller from "./examples/Controller";

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
  component: Controller,
  parameters: {
    // 컴포넌트가 렌더링되는 캔버스 내 레이아웃을 중앙으로 설정
    layout: "centered",
  },
  // props 기반 자동 문서화를 활성화
  tags: ["autodocs"],
} satisfies Meta<typeof Controller>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Cancel: Story = {};
export const Maximize: Story = {};
export const Resize: Story = {};
export const DragAndDrop: Story = {};
export const All: Story = {};
