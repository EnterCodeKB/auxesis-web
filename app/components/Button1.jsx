import React from "react";

const Button1 = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-8 py-4 mt-4 rounded-lg bg-[#06327d] text-white no-underline"
    >
      {children}
    </button>
  );
};

export default Button1;
