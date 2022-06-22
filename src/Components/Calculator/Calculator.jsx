import React, { useEffect, useState } from "react";
import UserInput from "../UserInput/UserInput";
import Result from "../Result/Result";

import "./Calculator.css";

const Calculator = () => {
  const [totalAmount, setTotalAmount] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);
  const [billInput, setBillInput] = useState(null);
  const [tipInput, setTipInput] = useState(null);
  const [peopleInput, setPeopleInput] = useState(null);

  useEffect(() => {
    if (billInput > 0 && tipInput > 0 && peopleInput > 0) {
      calcTotalAmountPerPerson();
      calcTipAmountPerPerson();
    }
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
    let tip =
      ((Number(tipInput) / 100) * parseFloat(billInput)) / Number(peopleInput);
    let people = Number(peopleInput);

    let total = parseFloat(bill) / parseInt(people) + tip;
    setTotalAmount(parseFloat(total.toFixed(2)));
  };

  const calcBasedOnBtnInput = (id) => {
    console.log("ID - ", id);
    let billTotalAmount = parseFloat(billInput);
    let peopleTotalAmount = parseInt(peopleInput);

    let tipTotalAmount = ((id / 100) * billTotalAmount) / peopleTotalAmount;
    console.log("tipTotalAmount - ", tipTotalAmount);

    let total =
      parseFloat(billTotalAmount) / parseInt(peopleTotalAmount) +
      tipTotalAmount;

    console.log("TOTAL - ", total);

    let billTipAmount = parseFloat(billInput);
    let tipTipAmount = id / 100;
    let peopleTipAmount = parseInt(peopleInput);
    let totalTipAmount = null;
    totalTipAmount = (billTipAmount * tipTipAmount) / peopleTipAmount;

    console.log("TipAmount  - ", totalTipAmount);

    setTotalAmount(parseFloat(totalTipAmount.toFixed(2)));
    setTipAmount(parseFloat(total.toFixed(2)));
  };

  const handleReset = () => {
    console.log("RESET BUTTON CLICKED");
    setTotalAmount(0);
    setTipAmount(0);
    setBillInput("");
    setTipInput("");
    setPeopleInput("");
  };

  return (
    <div className="main_calculator">
      <UserInput
        handleBillChange={handleBillChange}
        handleTipChange={handleTipChange}
        handlePeopleChange={handlePeopleChange}
        handleButtonInput={calcBasedOnBtnInput}
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
