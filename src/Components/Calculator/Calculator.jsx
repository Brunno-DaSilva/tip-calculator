import React, { useEffect, useState } from "react";
import UserInput from "../UserInput/UserInput";
import Result from "../Result/Result";

import "./Calculator.css";

const Calculator = ({ isBrownMode }) => {
  const [totalAmount, setTotalAmount] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);
  const [billInput, setBillInput] = useState("");
  const [tipInput, setTipInput] = useState("");
  const [peopleInput, setPeopleInput] = useState("");

  useEffect(() => {
    if (billInput > 0 && tipInput > 0 && peopleInput > 0) {
      calcTotalAmountPerPerson();
      calcTipAmountPerPerson();
      calcBasedOnBtnInput();
    }
  }, [billInput, tipInput, peopleInput, tipAmount]);

  const handleBillChange = (e) => {
    setBillInput(parseFloat(e.target.value));
  };
  const handleTipChange = (e, id) => {
    setTipInput(parseInt(e.target.value));
  };
  const handlePeopleChange = (e) => {
    setPeopleInput(parseInt(e.target.value));
  };

  const calcTipAmountPerPerson = () => {
    let bill = parseFloat(billInput);
    let tip = parseInt(tipInput) / 100;
    let people = parseInt(peopleInput);
    let total = null;
    total = (bill * tip) / people;
    setTipAmount(parseInt(total.toFixed(2)));
  };

  const calcTotalAmountPerPerson = () => {
    let bill = parseFloat(billInput);
    let tip =
      ((Number(tipInput) / 100) * parseFloat(billInput)) / Number(peopleInput);
    let people = Number(peopleInput);

    let total = parseFloat(bill) / parseInt(people) + tip;
    setTotalAmount(parseFloat(total.toFixed(2)));
  };

  const calcBasedOnBtnInput = () => {
    let billTotalAmount = parseFloat(billInput);
    let tipTotalAmount = (tipInput / 100) * billTotalAmount;
    let peopleTotalAmount = parseInt(peopleInput);

    tipTotalAmount = tipTotalAmount / peopleTotalAmount;

    let total =
      parseFloat(billTotalAmount) / parseInt(peopleTotalAmount) +
      tipTotalAmount;

    let billTipAmount = parseFloat(billInput);
    let tipTipAmount = tipInput / 100;
    let peopleTipAmount = parseInt(peopleInput);
    let totalTipAmount = null;
    totalTipAmount = (billTipAmount * tipTipAmount) / peopleTipAmount;

    setTipAmount(parseFloat(totalTipAmount.toFixed(2)));
    setTotalAmount(parseFloat(total.toFixed(2)));
  };

  const handleReset = () => {
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
        setTipInput={setTipInput}
        peopleInput={peopleInput}
        billInput={billInput}
        tipInput={tipInput}
        setPeopleInput={setPeopleInput}
        setBillInput={setBillInput}
        isBrownMode={isBrownMode}
      />
      <Result
        totalAmount={totalAmount}
        tipAmount={tipAmount}
        reset={handleReset}
        isBrownMode={isBrownMode}
      />
    </div>
  );
};

export default Calculator;
