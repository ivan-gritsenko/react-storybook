import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import SidebarMenu, { type MenuItem } from "../components/Sidebar/SidebarMenu";
import { Button } from "./Button";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const menuData: MenuItem[] = [
  {
    label: "Dashboard",
  },
  {
    label: "Settings",
    children: [
      { label: "Profile" },
      { label: "Account" },
      {
        label: "Advanced",
        children: [{ label: "Security" }, { label: "Logs" }],
      },
    ],
  },
  {
    label: "Help",
  },
];

const SidebarWrapper: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: "2rem" }}>
      <Button label="Open Sidebar" onClick={() => setOpen(true)} />
      <SidebarMenu open={open} onClose={() => setOpen(false)} menu={menuData} />
    </div>
  );
};

export const Default: Story = {
  render: () => <SidebarWrapper />,
};
