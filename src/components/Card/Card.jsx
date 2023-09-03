import React from "react";
import style from "./Card.module.scss";

const Card = ({ selectedCurrency }) => {
  return (
    <div className={style.card}>
      <h3>{selectedCurrency}</h3>
      <p>Current rate</p>
    </div>
  );
};

export default Card;
