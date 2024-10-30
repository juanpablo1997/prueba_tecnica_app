import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ButtonCustom.css";

interface ButtonCustomProps {
  label: string;
  onClick: () => void;
  variant?: "solid" | "outlined";
  size?: string;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  label,
  onClick,
  variant = "solid",
  size,
  disabled = false,
  className = "",
  fullWidth = false,
}) => {
  const baseClass = `btn ${size ? `btn-${size}` : ""} btn-custom ${className} ${
    fullWidth ? "w-100" : ""
  }`;

  const solidStyle = {
    backgroundColor: "#de3b8e",
    color: "white",
  };

  const outlinedStyle = {
    borderColor: "#de3b8e",
    color: "#de3b8e",
  };

  return (
    <button
      className={baseClass}
      style={variant === "solid" ? solidStyle : outlinedStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ButtonCustom;