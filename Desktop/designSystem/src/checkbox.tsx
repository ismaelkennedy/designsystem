import React from "react";

const Checkbox = ({ label, checked, onChange, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 accent-[#7DC2A5] border-[#7DC2A5] rounded focus:ring-2 focus:ring-blue-500"
      />
      {label && <span className="text-sm text-white font-extralight">{label}</span>}
    </div>
  );
};

export default Checkbox;
