import type { Meta, StoryObj } from "@storybook/react-vite";

import Variable from "./examples/Variable";
import resolvedToken from "@designTokens/build/tokens_resolved";

const resolvedTokeKeys = Object.keys(
  resolvedToken
) as (keyof typeof resolvedToken)[];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Foundation(Tokens)/KRDS/Variable",
  component: Variable,
  parameters: {
    // layout: "centered",
  },

  // props 기반 자동 문서화를 활성화
  // tags: ["autodocs"],
} satisfies Meta<typeof Variable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variableKeys: resolvedTokeKeys[0],
  },
};
export const Light: Story = {
  args: {
    variableKeys: resolvedTokeKeys[1],
  },
};
export const HighContrast: Story = {
  args: {
    variableKeys: resolvedTokeKeys[2],
  },
};
export const ResponsivePc: Story = {
  args: {
    variableKeys: resolvedTokeKeys[3],
  },
};
export const ResponsiveMobile: Story = {
  args: {
    variableKeys: resolvedTokeKeys[4],
  },
};
export const Semantic: Story = {
  args: {
    variableKeys: resolvedTokeKeys[5],
  },
};
