import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo, faLeaf } from "@fortawesome/free-solid-svg-icons";
import Calculator from "./Components/Calculator/Calculator";

import "./App.css";

function App() {
  const [isBrownMode, setIsBrownMode] = useState(false);

  const handleThemeChange = () => {
    setIsBrownMode((prevMode) => !prevMode);
  };
  return (
    <div className="app">
      <div className="app__change_mode">
        <button
          class={
            isBrownMode
              ? "app__change_mode--btn "
              : "app__change_mode--btn brown-mode"
          }
          onClick={handleThemeChange}
        >
          {isBrownMode ? (
            <FontAwesomeIcon icon={faLeaf} />
          ) : (
            <FontAwesomeIcon icon={faPoo} />
          )}
        </button>
      </div>
      <div className="grid"></div>
      <div className="grid-mb"></div>
      <header className="app__header">
        <h1 className="header__title">
          <span>SPLI</span>
          <span>TTER</span>
        </h1>
      </header>
      <div className="grid-mb"></div>
      <div className="grid"></div>
      <Calculator isBrownMode={isBrownMode} />
      <div className="grid"></div>
    </div>
  );
}

export default App;
