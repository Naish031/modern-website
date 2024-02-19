import React from "react";

const Button = ({ title, styles }) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
