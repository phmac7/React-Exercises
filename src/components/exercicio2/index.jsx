import "./exercicio2.css";

function Exercicio2() {
  const onClickHandler = () => {
    alert("Clicked");
  };

  return (
    <div className="ex2__container centralized-box">
      <button onClick={onClickHandler} className="ex2__btn">
        Click Me
      </button>
    </div>
  );
}

export default Exercicio2;
