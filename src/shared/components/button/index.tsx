import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  const { children, className, ...buttonProps } = props;

  return (
    <button
      className={`bg-cyan-900 rounded py-2 px-4 text-gray-50 hover:bg-cyan-800 hover:shadow ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
