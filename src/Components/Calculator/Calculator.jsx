import React from "react";
import UserInput from "../UserInput/UserInput";
import Result from "../Result/Result";

import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="main_calculator">
      <UserInput />
      <Result />
    </div>
  );
};

export default Calculator;
