import React, { useState } from "react";
import "./SidebarMenu.css";
import { ChevronDown, X } from "lucide-react";

export interface MenuItem {
  label: string;
  children?: MenuItem[];
}

interface SidebarMenuProps {
  open: boolean;
  onClose: () => void;
  menu: MenuItem[];
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ open, onClose, menu }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const renderMenu = (items: MenuItem[], depth = 0) => (
    <ul className="menu-list" style={{ marginLeft: depth * 12 }}>
      {items.map((item) => {
        const expanded = expandedItems.includes(item.label);

        return (
          <li key={item.label}>
            <div
              className="menu-item"
              onClick={() =>
                item.children ? toggleExpand(item.label) : onClose()
              }
            >
              <span>{item.label}</span>
              {item.children && (
                <ChevronDown
                  size={16}
                  className={`chevron ${expanded ? "rotated" : ""}`}
                />
              )}
            </div>

            {item.children && expanded && (
              <div className="submenu">{renderMenu(item.children, depth + 1)}</div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <div className={`sidebar-backdrop ${open ? "show" : ""}`} onClick={onClose} />
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button onClick={onClose} className="close-btn">
            <X size={18} />
          </button>
        </div>
        <nav>{renderMenu(menu)}</nav>
      </aside>
    </>
  );
};

export default SidebarMenu;
