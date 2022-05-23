import "./exercicio5.css";

function Exercicio5() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <div className="centralized-box ex5__container">
      <ul>
        {animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercicio5;
