import Input from "../components/Input/Input";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "number"],
    },
    clearable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    placeholder: "Enter text",
    className: "my-input",
    type: "text",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter password",
    className: "my-input",
    type: "password",
    clearable: true,
  },
};

export const Number: Story = {
  args: {
    placeholder: "Enter number",
    className: "my-input",
    type: "number",
  },
};
