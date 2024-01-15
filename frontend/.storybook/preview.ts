import type { Preview } from "@storybook/react";
import "../app/_components/global.css";

const customViewports = {
  mobile: {
    name: "mobile",
    styles: {
      width: "639px",
      height: "100%",
    },
  },

  sm: {
    name: "sm",
    styles: {
      width: "640px",
      height: "100%",
    },
  },
  md: {
    name: "md",
    styles: {
      width: "768px",
      height: "100%",
    },
  },
  lg: {
    name: "lg",
    styles: {
      width: "1024px",
      height: "100%",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: { viewports: customViewports },
  },
};

export default preview;
