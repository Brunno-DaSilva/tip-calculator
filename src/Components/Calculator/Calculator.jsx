import React, { useState } from "react";
import UserInput from "../UserInput/UserInput";
import Result from "../Result/Result";

import "./Calculator.css";

const initialState = {
  bill: 0.0,
  tip: 0,
  people: 0,
};
const Calculator = () => {
  const [userInput, setUserInput] = useState(initialState);
  const [billInput, setBillInput] = useState("");
  const [tipInput, setTipInput] = useState("");
  const [peopleInput, setPeopleInput] = useState("");

  console.log("Initial Bill - ", billInput);
  console.log("Initial Tip - ", tipInput);
  console.log("Initial People - ", peopleInput);
  console.log("Initial UserInput - ", userInput);

  const handleBillChange = (e) => {
    setBillInput(e.target.value);
  };
  const handleTipChange = (e) => {
    setTipInput(e.target.id || e.target.value);
  };
  const handlePeopleChange = (e) => {
    setPeopleInput(e.target.value);
  };

  const onSubmit = (e) => {
    handleBillChange(e);
    handleTipChange(e);
    handlePeopleChange(e);

    e.preventDefault();
    if (!userInput.bill || /^\s*$/.test(userInput.bill)) return;
    if (!userInput.tip || /^\s*$/.test(userInput.tip)) return;
    if (!userInput.people || /^\s*$/.test(userInput.people)) return;

    if (userInput) {
      const newList = {
        [e.target.name]: billInput,
        [e.target.name || e.target.id]: tipInput,
        [e.target.name]: peopleInput,
      };
      setUserInput([...newList, newList]);
    }
  };

  return (
    <div className="main_calculator">
      <UserInput
        onSubmit={onSubmit}
        handleBillChange={handleBillChange}
        handleTipChange={handleTipChange}
        handlePeopleChange={handlePeopleChange}
      />
      <Result />
    </div>
  );
};

export default Calculator;
