import { useState } from "react";

function useInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const { status: isInputValid, error } = validateValue(enteredValue);
  const hasError = !isInputValid && isInputTouched;

  const inputChangeHandler = (evt) => {
    setEnteredValue(evt.target.value);
  };

  const inputBlurHandler = () => {
    setIsInputTouched(true);
  };

  const resetInput = () => {
    setEnteredValue("");
    setIsInputTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isInputValid,
    error,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
}

export default useInput;
