import { useState } from "react";

export const useInputs = (values) => {
  const [state, setState] = useState(values);

  const setInput = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setState((state) => ({
      ...state,
      [fieldName]: value,
    }));
  };

  return [state, setInput];
};


