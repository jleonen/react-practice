import { useState } from "react";

const useFormHandler = () => {
  const [input, setInput] = useState("");
  //   const [className, setClassName] = useState("");
  //   const [upgrade, setUpgrade] = useState("");
  const [formValid, setFormValid] = useState(true);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const reset = () => {
    setInput("");
  };

  return {
    input,
    setInput,
    reset,
    // className,
    // setClassName,
    // formValid,
    // setFormValid,
    // upgrade,
    // setUpgrade,
    inputChangeHandler,
    formValid,
    setFormValid,
  };
};

export default useFormHandler;
