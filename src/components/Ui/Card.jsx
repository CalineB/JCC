import React from "react";

export const Card = ({ title, children }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-md text-white">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`p-4 bg-gray-800 rounded-md ${className || ""}`}>
      {children}
    </div>
  );
};