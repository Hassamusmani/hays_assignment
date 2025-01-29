import React from "react";
import { Image } from "lucide-react";

import styles from "./Header.module.css";
import CustomInput from "../common/CustomInput";
import { useGrid } from "../../store/GridContext";

const Header = () => {
  const { rows, cols, setRows, setCols } = useGrid();

  return (
    <header className={styles.header}>
      <h1>The Raster Grid</h1>
      <form>
        <CustomInput
          label="Rows"
          name="rows"
          type="number"
          value={rows}
          onChangeHandler={setRows}
        />
        <CustomInput
          label="Cols"
          name="cols"
          type="number"
          value={cols}
          onChangeHandler={setCols}
        />
      </form>
    </header>
  );
};

export default Header;
