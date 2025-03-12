import React from "react";

const Input = ({
  label,
  type,
  name,
  error,
  accept,
  placeholder,
  className,
  value,
  onchange,
  ...props
}) => {
  return (
    <div className={`flex flex-col space-y-1 w-full`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        className={`border rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        placeholder={placeholder}
        type={type}
        name={name}
        accept={accept}
        onChange={onchange}
        value={value}
        {...props}
      />
      {error ? (
        <p className="text-xs text-red-500 ml-3 visible">{error}</p>
      ) : (
        <p className="text-xs text-red-500 ml-3 invisible">.</p>
      )}
    </div>
  );
};

export default Input;
