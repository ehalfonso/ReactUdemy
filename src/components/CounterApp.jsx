import PropTypes from "prop-types";
import { Button } from "./Button";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubtract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <Button handleClick={handleAdd} title={"+1"} />
      <Button handleClick={handleSubtract} title={"-1"} />
      <Button handleClick={handleReset} title={"Reset"} />
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
