import Calculator from "./Components/Calculator/Calculator";

import "./App.css";

function App() {
  return (
    <div className="app">
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
      <Calculator />
      <div className="grid"></div>
    </div>
  );
}

export default App;
