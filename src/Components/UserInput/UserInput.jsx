import React, { useState } from "react";
import "./UserInput.css";
import PeopleIcon from "../../assets/images/icon-person.svg";
import DollarIcon from "../../assets/images/icon-dollar.svg";

const tips = [
  {
    id: 5,
    percentage: 5,
  },
  {
    id: 10,
    percentage: 10,
  },
  {
    id: 15,
    percentage: 15,
  },
  {
    id: 25,
    percentage: 25,
  },
  {
    id: 50,
    percentage: 50,
  },
  {
    id: 100,
    percentage: null,
  },
];

const UserInput = ({
  handleBillChange,
  handleTipChange,
  handlePeopleChange,
  setTipInput,
  peopleInput,
  billInput,
  tipInput,
}) => {
  return (
    <div className="main_calculator__input_value">
      <div className="input_value__main">
        <div className="input_value__bill">
          <div className="bill__title">
            <p>Bill</p>
          </div>
          <div className="bill__input_main">
            <div className="bill__input_dollar">
              <img src={DollarIcon} alt="Dollar Icon" />
            </div>
            <div className="bill__input_dollar">
              <input
                name="bill"
                onChange={handleBillChange}
                type="text"
                placeholder="0.0"
                value={billInput}
              />
            </div>
          </div>
        </div>

        <div className="input_value__tip">
          <div className="tip__title">
            <p>Select Tip %</p>
          </div>
          <div className="tip__select">
            {tips.map((tip, event) =>
              tip.percentage !== null ? (
                <div className="tip__select--container">
                  <input
                    key={tip.id.toString()}
                    type="radio"
                    name="tip-percentage"
                    id={tip.id}
                    onClick={() => {
                      setTipInput(tip.id);
                    }}
                    value={tip.percentage}
                    className="tip__select--radio"
                  />
                  <label
                    key={1 + tip.id.toString()}
                    id={tip.id}
                    className="tip__select--label"
                    name="tip"
                    htmlFor={tip.id}
                  >
                    {tip.percentage}%
                  </label>
                </div>
              ) : (
                <input
                  key={1 + tip.id}
                  className="tip__select--input"
                  type="text"
                  placeholder="Custom"
                  onChange={handleTipChange}
                  name="tip"
                  value={tipInput}
                />
              )
            )}
          </div>
        </div>
        <div className="input_value__people">
          {peopleInput === null ? (
            <div className="people__title">
              <p>Number of People</p>
              <span>Can't be zero</span>
            </div>
          ) : (
            <div></div>
          )}
          <div className="people__input_main">
            <div className="people__input_dollar">
              <img src={PeopleIcon} alt="People icon" />
            </div>
            <div className="people__input_dollar">
              <input
                onChange={handlePeopleChange}
                name="people"
                type="text"
                placeholder="0"
                value={peopleInput}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
