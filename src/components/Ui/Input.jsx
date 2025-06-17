  import React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  const baseClasses =
    "w-full px-3 py-2 rounded-md border bg-white text-black placeholder:text-gray-400 " +
    "focus:outline-none focus:ring-2 focus:ring-[#ca9728] " +
    "transition-colors duration-200 " +
    "dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder:text-gray-500 " +
    "dark:focus:ring-[#ca9728]";

  return (
    <input
      ref={ref}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";
