import React, { useState } from "react";

export const Tabs = ({ defaultValue, children, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    if (child.type.displayName === "TabsList") {
      return React.cloneElement(child, { activeTab, setActiveTab });
    }

    if (child.type.displayName === "TabsContent") {
      return child.props.value === activeTab ? child : null;
    }

    return child;
  });

  return <div className={className}>{childrenWithProps}</div>;
};

export const TabsList = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isActive: child.props.value === activeTab,
          onClick: () => setActiveTab(child.props.value),
        })
      )}
    </div>
  );
};
TabsList.displayName = "TabsList";

export const TabsTrigger = ({ children, value, isActive, onClick }) => {
  const baseClasses =
    "px-3 py-1 rounded-md border transition-colors text-sm font-medium";

  const activeClasses = "bg-[#ca9728] text-black border-[#ca9728]";
  const inactiveClasses =
    "bg-transparent text-white border-gray-600 hover:bg-[#ca9728]/30";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {children}
    </button>
  );
};
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = ({ children }) => {
  return <div className="mt-4">{children}</div>;
};
TabsContent.displayName = "TabsContent";
