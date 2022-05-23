import React from "react";
import "./ItemList.css";

function index({ list }) {
  return (
    <ul className="list">
      {list.map((item) => {
        return (
          <li className="list__item" key={item}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default index;
