import React from "react";
import style from "./Card.module.scss";

const Card = ({ currency }) => {
  return (
    <div className={style.card}>
      <h3>{currency}</h3>
      <p>Current rate</p>
    </div>
  );
};

export default Card;
