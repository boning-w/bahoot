import type { Meta, StoryObj } from "@storybook/react";

import InputAuth from "./input-auth";

const meta = {
  title: "Bahoot/Input/Auth",
  component: InputAuth,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof InputAuth>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
  args: {
    type: "text",
    id: "mobile",
    label: "Mobile",
  },
};

export const Small: Story = {
  parameters: {
    viewport: {
      defaultViewport: "sm",
    },
  },
  args: {
    type: "text",
    id: "sm",
    label: "Small",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    id: "email",
    label: "Email",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    id: "password",
    label: "Password",
  },
};
