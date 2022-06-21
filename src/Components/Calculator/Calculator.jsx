import React, { useState } from "react";
import UserInput from "../UserInput/UserInput";
import Result from "../Result/Result";

import "./Calculator.css";

const Calculator = () => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="main_calculator">
      <UserInput handleChange={handleChange} />
      <Result />
    </div>
  );
};

export default Calculator;
