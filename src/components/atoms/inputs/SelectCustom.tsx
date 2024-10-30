import React from "react";
import "./InputCustom.css";

interface SelectCustomProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { id: number; nombre: string; total: string }[];
  label?: string;
  required?: boolean;
  className?: string;
  name?: string;
}

const SelectCustom: React.FC<SelectCustomProps> = ({
  value,
  onChange,
  options,
  label,
  required = false,
  className,
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
      <select
        className={`input ${required ? "input-required" : ""}`}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      >
        <option value="" disabled className="text-white bg-white">
          Selecciona una categoría
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.nombre} className="bg-white custom-text-primary">
            {option.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCustom;
