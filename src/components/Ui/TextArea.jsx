import React from "react";

export const Textarea = React.forwardRef(({ className = "", ...props }, ref) => {
  const baseClasses =
    "w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#ca9728]";

  return (
    <textarea
      ref={ref}
      className={`${baseClasses} ${className}`}
      rows={4}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
