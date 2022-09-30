import React from "react";
import cx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inline?: boolean;
}

export function Button({ children, inline = false, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cx(
        "purple-gradient text-white py-3 px-6 rounded w-full",
        inline && "w-auto"
      )}
    >
      {children}
    </button>
  );
}
