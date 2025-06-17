import type { Meta, StoryObj } from "@storybook/react-vite";

const Doc = () => {
  return null;
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Foundation(Tokens)/소개",
  component: Doc,
  parameters: {
    // layout: "centered",
  },

  // props 기반 자동 문서화를 활성화
  // tags: ["autodocs"],
} satisfies Meta<typeof Doc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const changeTheme: Story = {
  name: "테마 변경",
};
