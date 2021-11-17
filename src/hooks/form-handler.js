import { useState } from "react";

const useFormHandler = () => {
  const [input, setInput] = useState("");
  const [validInput, setValidInput] = useState(true);
  //   const [className, setClassName] = useState("");
  //   const [upgrade, setUpgrade] = useState("");
  const [formValid, setFormValid] = useState(true);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
    // if (event.target.value.trim().length > 0) {
    //   setValidInput(true);
    // } else {
    //   setValidInput(false);
    // }
  };

  const validateValue = () => {
    if (input.trim().length > 0) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  };

  const reset = () => {
    setInput("");
  };

  return {
    input,
    setInput,
    reset,
    validInput,
    validateValue,
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
