import style from "./Toggle.module.scss";
const Toggle = ({ handleToggle, toggle }) => {
  return (
    <button className={style.toggleSwitch} onClick={handleToggle}>
      {toggle ? "BAR" : "LINE"}
    </button>
  );
};

export default Toggle;
