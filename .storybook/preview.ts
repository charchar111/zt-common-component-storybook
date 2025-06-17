import type { Preview } from "@storybook/react-vite";
import "../src/index.css"; // Import your global styles here
import "../src/App.css";

const preview: Preview = {
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
