import React, { useEffect, useState } from "react";
import UserInput from "../UserInput/UserInput";
import Result from "../Result/Result";

import "./Calculator.css";

const Calculator = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [billInput, setBillInput] = useState("");
  const [tipInput, setTipInput] = useState("");
  const [peopleInput, setPeopleInput] = useState("");

  useEffect(() => {
    calcTotalAmountPerPerson();
    calcTipAmountPerPerson();
  }, [billInput, tipInput, peopleInput, tipAmount]);

  const handleBillChange = (e) => {
    setBillInput(e.target.value);
  };
  const handleTipChange = (e) => {
    setTipInput(e.target.id || e.target.value);
  };
  const handlePeopleChange = (e) => {
    setPeopleInput(e.target.value);
  };

  const calcTipAmountPerPerson = () => {
    let bill = parseFloat(billInput);
    let tip = parseInt(tipInput) / 100;
    let people = parseInt(peopleInput);
    let total = null;
    total = (bill * tip) / people;
    setTipAmount(parseFloat(total.toFixed(2)));
  };

  const calcTotalAmountPerPerson = () => {
    let bill = parseFloat(billInput);
    let tip = Number(tipInput) / 100;
    let people = Number(peopleInput);
    let total = parseFloat(bill) / parseInt(people) + tip;
    setTotalAmount(parseFloat(total.toFixed(2)));
  };

  const handleReset = () => {
    console.log("RESET BUTTON CLICKED");
    setTotalAmount(0);
    setTipAmount(0);
    setBillInput("");
    setTipInput("");
    setPeopleInput("");
  };

  // calcTotalAmountPerPerson();
  // calcTipAmountPerPerson();

  return (
    <div className="main_calculator">
      <UserInput
        handleBillChange={handleBillChange}
        handleTipChange={handleTipChange}
        handlePeopleChange={handlePeopleChange}
      />
      <Result
        totalAmount={totalAmount}
        tipAmount={tipAmount}
        reset={handleReset}
      />
    </div>
  );
};

export default Calculator;
