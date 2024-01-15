import type { Meta, StoryObj } from "@storybook/react";

import FormLogin from "./form-login";

const meta = {
  title: "Bahoot/Form/Login",
  component: FormLogin,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof FormLogin>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
};

export const Small: Story = {
  parameters: {
    viewport: {
      defaultViewport: "sm",
    },
  },
};
