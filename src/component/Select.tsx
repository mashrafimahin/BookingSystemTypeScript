// hooks
import type React from "react";
import { useState, type FC } from "react";

// type
import type { FormStyle } from "./Form";

// interface for selector
interface SelectItems {
  options: string[];
  name: keyof FormStyle;
  setData: React.Dispatch<React.SetStateAction<FormStyle>>;
}

// main
const Selection: FC<SelectItems> = ({ options, name, setData }) => {
  // individual state
  const [state, setState] = useState<string>("-- select --");

  // change handler
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setState(state);
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <select
      name={name}
      value={state}
      onChange={handleChange}
      className="w-full px-4 py-2 rounded-md text-sm text-gray-900 tracking-wide outline-0 border border-gray-300"
    >
      {options.map((elm, i) => (
        <option key={i} value={elm}>
          {elm}
        </option>
      ))}
    </select>
  );
};

export default Selection;
