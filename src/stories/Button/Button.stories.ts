import { Button } from "@/components/Button/Button";
import BrowserDownloader from "@/components/FileDownloader/BrowserDownloader";
import { Form as FileUploaderForm } from "@/components/input/FileUploader";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * <br/>
 * <hr/>
 *
 * 의존성
 *
 * 의존성이 없습니다.
 */

// 스토리북 메타데이터를 정의합니다.
// 이 메타데이터는 스토리북이 컴포넌트를 렌더링하는 데 사용됩니다.
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // 컴포넌트가 렌더링되는 캔버스 내 레이아웃을 중앙으로 설정
    layout: "centered",
  },
  // props 기반 자동 문서화를 활성화
  tags: ["autodocs"],
  argTypes: {
    $color: {
      control: { type: "radio" }, // dropdown도 가능
      options: ["primary", "secondary", "tertiary"],
    },
    $typo: {
      control: { type: "radio" },
      options: ["small", "large"],
    },
    $shape: {
      control: { type: "radio" },
      options: ["medium3", "medium4", "large8"],
    },
    $layout: {
      control: { type: "radio" },
      options: ["small", "large"],
    },
    $elevation: {
      control: { type: "radio" },
      options: ["shadow1", "shadow2", "shadow3", "shadow4"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "버튼",
    $color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "버튼",
    $color: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    label: "버튼",
    $color: "tertiary",
  },
};
