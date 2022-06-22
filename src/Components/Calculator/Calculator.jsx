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
      calcBasedOnBtnInput();
    }
  }, [billInput, tipInput, peopleInput, tipAmount]);

  const handleBillChange = (e) => {
    setBillInput(e.target.value);
  };
  const handleTipChange = (e, id) => {
    console.log(e.target);
    setTipInput(e.target.value);
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

  /*BUTTON CLICK */
  const calcBasedOnBtnInput = () => {
    let billTotalAmount = parseFloat(billInput);
    console.log("billTotalAmount -", billTotalAmount);

    let tipTotalAmount = (tipInput / 100) * billTotalAmount;
    console.log("tipTotalAmount - ", tipTotalAmount);

    let peopleTotalAmount = parseInt(peopleInput);
    console.log("peopleTotalAmount -", peopleTotalAmount);

    tipTotalAmount = tipTotalAmount / peopleTotalAmount;

    let total =
      parseFloat(billTotalAmount) / parseInt(peopleTotalAmount) +
      tipTotalAmount;

    // console.log("TOTAL - ", total);

    let billTipAmount = parseFloat(billInput);
    let tipTipAmount = tipInput / 100;
    let peopleTipAmount = parseInt(peopleInput);
    let totalTipAmount = null;
    totalTipAmount = (billTipAmount * tipTipAmount) / peopleTipAmount;

    // console.log("TipAmount  - ", totalTipAmount);

    setTipAmount(parseFloat(totalTipAmount.toFixed(2)));
    setTotalAmount(parseFloat(total.toFixed(2)));
  };

  const handleReset = () => {
    console.log("RESET BUTTON CLICKED");
    setTotalAmount(null);
    setTipAmount(null);
    setBillInput(null);
    setTipInput(null);
    setPeopleInput(null);
  };

  return (
    <div className="main_calculator">
      <UserInput
        handleBillChange={handleBillChange}
        handleTipChange={handleTipChange}
        handlePeopleChange={handlePeopleChange}
        handleButtonInput={calcBasedOnBtnInput}
        setTipInput={setTipInput}
        peopleInput={peopleInput}
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
