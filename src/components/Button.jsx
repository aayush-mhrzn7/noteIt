import React from "react";

function Button({ placeholder = "", type, className = "", ...props }, ref) {
  return (
    <button
      type={type}
      className={` shadow-md text-lg w-full p-3 font-semibold font-primary ${className}`}
      {...props}
      ref={ref}
    ></button>
  );
}

export default React.forwardRef(Button);
