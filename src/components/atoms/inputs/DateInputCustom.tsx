import React from 'react';
import './InputCustom.css';

interface DateInputCustomProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  className?: string;
  name?:string;
}

const DateInputCustom: React.FC<DateInputCustomProps> = ({
  value,
  onChange,
  label,
  required = false,
  className,
  name,
}) => {
  return (
    <div className={`d-flex flex-column fw-bold ${className}`}>
      {label && (
        <label className='mb-2 custom-text-secondary'>
          {label}
          {required && <span className='text-danger'> *</span>}
        </label>
      )}
      <input
        type="date"
        className={`input ${required ? 'input-required' : ''}`}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      />
    </div>
  );
};

export default DateInputCustom;
