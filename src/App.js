import Calculator from "./Components/Calculator/Calculator";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="header__title">
          <span>SPLI</span>
          <span>TTER</span>
        </h1>
      </header>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
