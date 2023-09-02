import React from "react";
import currencies from "../../supportedCurrencies.json";

export const SelectForm = () => {
  return (
    <>
      <div className={style.priceContainer}>Price container</div>
      <div className={style.form}>
        <select placeholder="Select your currency">
          {supportedCurrencies.map((currency, index) => (
            <option key={index} value={index}>
              {currency.currency}
            </option>
          ))}
          <option value="1">Angular</option>
          <option value="2">React</option>
          <option value="3">Vue.js</option>
          <option value="4">Ember.js</option>
        </select>
      </div>
    </>
  );
};

// export default SelectForm;
