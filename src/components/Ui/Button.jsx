import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  const baseClasses =
    "px-4 py-2 rounded-md bg-[#ca9728] text-black font-medium hover:bg-[#e1ae4a] transition-colors disabled:opacity-50";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
