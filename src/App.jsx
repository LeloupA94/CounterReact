import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonMoin from "./components/BtnMoin";
import ButtonPlus from "./components/BtnPlus";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const onClickReset = () => setCounter(0);

  return (
    <>
      <Header />
      <div className="container">
        <ButtonMoin counter={counter} setCounter={setCounter} />
        <div className="counter">
          <div className="chiffre">
            <p>{counter}</p>
          </div>
        </div>
        <ButtonPlus counter={counter} setCounter={setCounter} />
      </div>
      <div className="retour">
        <button className="reset" type="reset" onClick={onClickReset}>
          Reset
        </button>
      </div>
      <Footer />
    </>
  );
};

export default App;
