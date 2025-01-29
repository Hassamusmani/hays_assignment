import React from "react";

import styles from "./Header.module.css";
import CustomInput from "../common/CustomInput";

const Header = ({ rows, cols, rowHandler, colHandler }) => {
  return (
    <header className={styles.header}>
      <h1>The Raster Grid</h1>
      <form>
        <CustomInput
          label="Rows"
          name="rows"
          type="number"
          value={rows}
          onChangeHandler={rowHandler}
        />
        <CustomInput
          label="Cols"
          name="cols"
          type="number"
          value={cols}
          onChangeHandler={colHandler}
        />
      </form>
    </header>
  );
};

export default Header;
