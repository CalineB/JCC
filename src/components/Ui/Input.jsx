import React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  const baseClasses =
    "w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ca9728]";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <input
      ref={ref}
      className={combinedClasses}
      {...props}
    />
  );
});

Input.displayName = "Input";
