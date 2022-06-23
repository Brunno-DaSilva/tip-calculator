import Calculator from "./Components/Calculator/Calculator";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="gird"></div>
      <div className="gird"></div>
      <header className="app__header">
        <h1 className="header__title">
          <span>SPLI</span>
          <span>TTER</span>
        </h1>
      </header>
      <Calculator />
      <div className="gird"></div>
    </div>
  );
}

export default App;
