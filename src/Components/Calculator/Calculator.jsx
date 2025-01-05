import React, { useEffect, useState, useCallback } from "react";
import UserInput from "../UserInput/UserInput";
import Result from "../Result/Result";

import "./Calculator.css";

const Calculator = ({ isBrownMode }) => {
  const [totalAmount, setTotalAmount] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);
  const [billInput, setBillInput] = useState("");
  const [tipInput, setTipInput] = useState("");
  const [peopleInput, setPeopleInput] = useState("");

  const handleBillChange = (e) => {
    setBillInput(parseFloat(e.target.value));
  };

  const handleTipChange = (e) => {
    setTipInput(parseInt(e.target.value));
  };

  const handlePeopleChange = (e) => {
    setPeopleInput(parseInt(e.target.value));
  };

  const calcTipAmountPerPerson = useCallback(() => {
    if (billInput > 0 && tipInput > 0 && peopleInput > 0) {
      const bill = parseFloat(billInput);
      const tip = parseInt(tipInput) / 100;
      const people = parseInt(peopleInput);
      const tipAmountPerPerson = (bill * tip) / people;
      setTipAmount(parseFloat(tipAmountPerPerson.toFixed(2)));
    }
  }, [billInput, tipInput, peopleInput]);

  const calcTotalAmountPerPerson = useCallback(() => {
    if (billInput > 0 && tipInput > 0 && peopleInput > 0) {
      const bill = parseFloat(billInput);
      const tip =
        ((Number(tipInput) / 100) * parseFloat(billInput)) /
        Number(peopleInput);
      const people = Number(peopleInput);

      const totalAmountPerPerson = bill / people + tip;
      setTotalAmount(parseFloat(totalAmountPerPerson.toFixed(2)));
    }
  }, [billInput, tipInput, peopleInput]);

  const calcBasedOnBtnInput = useCallback(() => {
    if (billInput > 0 && tipInput > 0 && peopleInput > 0) {
      const billTotalAmount = parseFloat(billInput);
      const tipTotalAmount = (tipInput / 100) * billTotalAmount;
      const peopleTotalAmount = parseInt(peopleInput);

      const tipAmountPerPerson = tipTotalAmount / peopleTotalAmount;
      const total = billTotalAmount / peopleTotalAmount + tipAmountPerPerson;

      setTipAmount(parseFloat(tipAmountPerPerson.toFixed(2)));
      setTotalAmount(parseFloat(total.toFixed(2)));
    }
  }, [billInput, tipInput, peopleInput]);

  const handleReset = () => {
    setTotalAmount(0);
    setTipAmount(0);
    setBillInput("");
    setTipInput("");
    setPeopleInput("");
  };

  useEffect(() => {
    if (billInput > 0 && tipInput > 0 && peopleInput > 0) {
      calcTotalAmountPerPerson();
      calcTipAmountPerPerson();
      calcBasedOnBtnInput();
    }
  }, [
    calcTotalAmountPerPerson,
    calcTipAmountPerPerson,
    calcBasedOnBtnInput,
    billInput,
    tipInput,
    peopleInput,
  ]);

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
