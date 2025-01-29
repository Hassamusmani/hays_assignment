import React from "react";

import styles from "./CustomInput.module.css";

const CustomInput = (props) => {
  const { name, label, type, value, onChangeHandler } = props;

  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{label} :</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChangeHandler(Number(e.target.value))}
      />
    </div>
  );
};

export default CustomInput;
