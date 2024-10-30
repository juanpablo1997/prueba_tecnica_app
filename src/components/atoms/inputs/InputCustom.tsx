import React from "react";
import "./InputCustom.css";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  className?: string;
  name?: string;
}

const InputCustom: React.FC<CustomInputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  label,
  required = false,
  className = "",
  name,
}) => {
  return (
    <div className={`d-flex flex-column fw-bold ${className}`}>
      {label && (
        <label className="mb-2 custom-text-secondary">
          {label}
          {required && <span className="text-danger"> *</span>}
        </label>
      )}
      <input
        type={type}
        className={`input ${required ? "input-required" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      />
    </div>
  );
};

export default InputCustom;
