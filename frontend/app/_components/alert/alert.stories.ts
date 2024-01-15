import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./alert";

const meta = {
  title: "Bahoot/Alert",
  component: Alert,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    severity: "success",
    children: "Success",
  },
};

export const Info: Story = {
  args: {
    severity: "info",
    children: "Info",
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    children: "Warning",
  },
};

export const Error: Story = {
  args: {
    severity: "error",
    children: "Error",
  },
};
