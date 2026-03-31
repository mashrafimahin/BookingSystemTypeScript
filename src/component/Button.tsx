// hooks
import type { FC } from "react";

// interface
interface ButtonFace {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// main
const Button: FC<ButtonFace> = ({ children, ...rest }) => {
  return (
    <button
      type="submit"
      className="mt-2 px-4 py-2 w-full sm:w-fit rounded-sm font-medium border border-gray-600 text-md text-gray-800 font-sans cursor-pointer hover:bg-gray-200"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
