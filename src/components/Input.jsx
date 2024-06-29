import React from "react";
import { nanoid } from "@reduxjs/toolkit";

function Input(
  {
    placeholder = "",
    label,
    labelStyle,
    type,
    className = "",
    children,
    ...props
  },
  ref
) {
  const id = nanoid();
  return (
    <>
      <label htmlFor={id} className={`font-primary block ${labelStyle}`}>
        {label}
      </label>
      <input
        type={type}
        className={`shadow-md p-3 font-primary text-lg  border-2 border-border w-full  ${className}`}
        id={id}
        ref={ref}
        placeholder={placeholder}
        {...props}
      ></input>
    </>
  );
}

export default React.forwardRef(Input);
