import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import Toast, { type ToastType } from "../components/Toast/Toast";
import { Button } from "./Button";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "info"],
    },
    duration: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
    },
    message: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastWrapper = (args: { type?: ToastType; message: string; duration?: number }) => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <Button label="Show Toast" onClick={() => setShow(true)}/>
      {show && (
        <Toast
          {...args}
          onClose={() => setShow(false)}
        />
      )}
    </div>
  );
};

export const Success: Story = {
  render: (args) => <ToastWrapper {...args} />,
  args: {
    type: "success",
    message: "Operation successful!",
    duration: 3000,
  },
};

export const Error: Story = {
  render: (args) => <ToastWrapper {...args} />,
  args: {
    type: "error",
    message: "Something went wrong!",
    duration: 3000,
  },
};

export const Info: Story = {
  render: (args) => <ToastWrapper {...args} />,
  args: {
    type: "info",
    message: "This is an info message.",
    duration: 3000,
  },
};
