import React from "react";

export const Select = ({ children }) => {
  return (
    <div className="relative w-full">
      {children}
    </div>
  );
};

export const SelectTrigger = ({ children }) => {
  return (
    <button className="w-full px-4 py-2 border rounded-md bg-white text-left">
      {children}
    </button>
  );
};

export const SelectContent = ({ children }) => {
  return (
    <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow">
      {children}
    </div>
  );
};

export const SelectItem = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </div>
  );
};
