import React from "react";
import "./Jokes.css";
import jokesData from "../jokesData";

function index() {
  return (
    <>
      {jokesData.map((joke) => (
        <div key={joke.id} className="joke__container">
          <h2 className="joke__question">{joke.setup}</h2>
          <span className="joke__answer">{joke.punchline}</span>
        </div>
      ))}
    </>
  );
}

export default index;
