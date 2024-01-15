import type { Meta, StoryObj } from "@storybook/react";

import ButtonAuth from "./button-auth";

const meta = {
  title: "Bahoot/Button/Auth",
  component: ButtonAuth,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonAuth>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    label: "Button",
  },
};

export const Hover: Story = {
  args: {
    label: "Button",
  },
  parameters: { pseudo: { hover: true } },
};
