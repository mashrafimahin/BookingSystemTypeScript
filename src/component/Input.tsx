// hook
import type React from "react";
import { type FC } from "react";
// interface for props
import type { FormStyle } from "./Form";
export type FormPattern = {
  [key: string]: string | number;
};

interface InputItems {
  type: React.HTMLInputTypeAttribute;
  name: keyof FormStyle;
  placeholder: string;
  setData: React.Dispatch<React.SetStateAction<FormStyle>>;
}

// main
const Input: FC<InputItems> = ({ type, name, placeholder, setData }) => {
  // change state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      className="w-full px-4 py-2 rounded-md text-sm text-gray-950 tracking-wide outline-0 border border-gray-300 placeholder:text-gray-500"
    />
  );
};

export default Input;
