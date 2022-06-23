import React from "react";
import "./Result.css";

const Result = ({ totalAmount, tipAmount, reset }) => {
  let defaultTotal = isNaN(totalAmount) ? "0.00" : totalAmount;
  let defaultTip = isNaN(tipAmount) ? "0.00" : tipAmount;

  return (
    <div className="main_calculator__result">
      <div className="result__main">
        <div className="result__amount">
          <div className="amount__title">
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>

          <div className="amount__figure">
            <h3>
              $
              {defaultTip === null
                ? "0.00"
                : defaultTip.toString().length >= 3
                ? defaultTip
                : `${defaultTip}.00`}
            </h3>
          </div>
        </div>

        <div className="result__total">
          <div className="total__title">
            <p>Total</p>
            <span>/ person</span>
          </div>

          <div className="total__figure">
            <h3>
              $
              {defaultTotal === null
                ? "0.00"
                : defaultTotal.toString().length >= 3
                ? `${defaultTotal}`
                : `${defaultTotal}.00`}
            </h3>
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
