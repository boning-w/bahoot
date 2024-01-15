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

export const SignUp: Story = {
  args: {
    label: "Sign up",
  },
};

export const Login: Story = {
  args: {
    label: "Login",
  },
};

export const Center: Story = {
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    label: "Center",
  },
};
