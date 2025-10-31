import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import "./Toast.css";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`toast toast-${type} ${visible ? "show" : ""}`}>
      <span>{message}</span>
      <button className="toast-close" onClick={() => setVisible(false)}>
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;
