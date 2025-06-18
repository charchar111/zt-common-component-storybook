import type { Preview } from "@storybook/react-vite";
import "./reset.css";
import "./index.css"; // reset.css랑 위아래 순서 바꾸지 마세요. font 속성이 꼬입니다

import { ThemeProvider } from "styled-components";
import themes from "../src/components/themes/themes";

const preview: Preview = {
  decorators: [
    (Story) => (
      // 임시로 고정 값을 넣음. 나중에 동적으로 변경 가능하도록 수정
      <ThemeProvider theme={themes.KRDS}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    options: {
      storySort: {
        order: ["Foundation(Tokens)", "Components"],
      },
    },
  },
};

export default preview;
