import React from "react";

const Select = ({
  children,
  options,
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
      {/* {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )} */}
      <select
        value={value}
        className={`border rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        name={name}
        // accept={accept}
        onChange={onchange}
        {...props}
        options={options}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option?.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {error ? (
        <p className="text-xs text-red-500 ml-3 visible">{error}</p>
      ) : (
        <p className="text-xs text-red-500 ml-3 invisible">.</p>
      )}
    </div>
  );
};

export default Select;
