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

export const Input: Story = {
  args: {
    type: "text",
    id: "input",
    label: "Input",
  },
};

export const Error: Story = {
  args: {
    type: "text",
    id: "input",
    label: "Input",
    error: {
      message: "error message",
      type: "error type",
    },
  },
};

export const InputWithFocus: Story = {
  args: {
    type: "text",
    id: "input",
    label: "Input",
  },
  parameters: { pseudo: { focus: true } },
};

export const ErrorWithFocus: Story = {
  args: {
    type: "text",
    id: "input",
    label: "Input",
    error: {
      message: "error message",
      type: "error type",
    },
  },
  parameters: { pseudo: { focus: true } },
};
