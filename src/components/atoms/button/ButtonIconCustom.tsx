import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface ButtonIconProps {
  icon: React.ReactNode;
  onClick: () => void;
  size?: string;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  onClick,
  size,
  disabled = false,
  className = "",
  fullWidth = false,
}) => {
  const baseClass = ` ${size ? `btn-${size}` : ""} btn-icon-custom ${className} ${
    fullWidth ? "w-100" : ""
  }`;

  return (
    <button className={baseClass} onClick={onClick} disabled={disabled}>
      {icon}
    </button>
  );
};

export default ButtonIcon;
