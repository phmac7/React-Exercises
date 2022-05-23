import ItemList from "../ItemList";
import "./exercicio6.css";

function Exercicio6() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <div className="centralized-box ex6__container">
      <ItemList list={animals} />
    </div>
  );
}

export default Exercicio6;
