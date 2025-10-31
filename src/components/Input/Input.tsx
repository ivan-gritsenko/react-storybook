import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
  className?: string;
  inputStyle?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  clearable,
  className,
  inputStyle,
  ...props
}) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const handleClear = () => setValue("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <div className={`input-wrapper ${className || ""}`}>
      <input
        {...props}
        type={isPassword && showPassword ? "text" : type}
        value={value}
        onChange={handleChange}
        className="input-field"
        style={inputStyle}
      />

      {clearable && (
        <button
          type="button"
          className={`clear-button ${value ? "visible" : ""}`}
          onClick={handleClear}
        >
          <X size={18} />
        </button>
      )}

      {isPassword && (
        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
};

export default Input;
