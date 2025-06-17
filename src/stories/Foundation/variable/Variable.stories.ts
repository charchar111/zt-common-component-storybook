import type { Meta, StoryObj } from "@storybook/react-vite";

import Variable from "./examples/Variable";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Foundation(Tokens)/Variable",
  component: Variable,
  parameters: {
    layout: "centered",
  },

  // props 기반 자동 문서화를 활성화
  // tags: ["autodocs"],
} satisfies Meta<typeof Variable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
