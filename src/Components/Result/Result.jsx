import React from "react";
import "./Result.css";

const Result = ({ totalAmount, tipAmount, reset }) => {
  let defaultTotal = totalAmount || `0.0`;
  let defaultTip = tipAmount || `0.0`;

  return (
    <div className="main_calculator__result">
      <div className="result__main">
        <div className="result__amount">
          <div className="amount__title">
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>

          <div className="amount__figure">
            <h3>{`${defaultTip}`} </h3>
          </div>
        </div>

        <div className="result__total">
          <div className="total__title">
            <p>Total</p>
            <span>/ person</span>
          </div>

          <div className="total__figure">
            <h3>{`${defaultTotal}`}</h3>
          </div>
        </div>
        <div className="result__button">
          <button
            type="button"
            onClick={() => {
              reset();
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
