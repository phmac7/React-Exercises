import { useState } from "react";
import Button from "../Button";
import "./exercicio4.css";

function Exercicio4() {
  const [counter, setCounter] = useState(0);

  const counterHandler = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="centralized-box ex4__container">
      <p>Button has been clicked {counter} times</p>
      <Button onClick={counterHandler}>Click me</Button>
    </div>
  );
}

export default Exercicio4;
