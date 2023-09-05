import React from "react";
import style from "./Card.module.scss";

const Card = ({ selectedCurrency, currentRate }) => {
  return (
    <div className={style.card}>
      <h3>{selectedCurrency}</h3>
      <p>Current rate: {currentRate}</p>
    </div>
  );
};

export default Card;
