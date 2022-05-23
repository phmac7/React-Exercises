import "./exercicio7.css";
import { useState } from "react";

function Exercicio7() {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  });

  const firstNameChangeHandler = (e) => {
    setName((prev) => {
      return { ...prev, firstname: e.target.value };
    });
  };

  const lastNameChangeHandler = (e) => {
    setName((prev) => {
      return { ...prev, lastname: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${name.firstname} ${name.lastname}`);
    setName({ firstname: "", lastname: "" });
  };

  return (
    <div className="ex7__container centralized-box">
      <form onSubmit={onSubmitHandler} className="form">
        <input
          type="text"
          className="form__input form__input-firstname"
          placeholder="First Name"
          value={name.firstname}
          onChange={firstNameChangeHandler}
          required
        />
        <input
          type="text"
          className="form__input form__input-lastname"
          placeholder="Last Name"
          value={name.lastname}
          onChange={lastNameChangeHandler}
          required
        />
        <button className="form__btn">Greet me!</button>
      </form>
    </div>
  );
}

export default Exercicio7;
