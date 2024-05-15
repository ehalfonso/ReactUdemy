import React from "react";

export const Button = ({ handleClick, title }) => {
  return (
    <>
      <button onClick={handleClick}>{title}</button>
    </>
  );
};
