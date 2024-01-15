import type { Meta, StoryObj } from "@storybook/react";

import FormSignUp from "./form-sign-up";

const meta = {
  title: "Bahoot/Form/SignUp",
  component: FormSignUp,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof FormSignUp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignUp: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
};
