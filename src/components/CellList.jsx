import { useGrid } from "../store/GridContext";
import styles from "./CellList.module.css";

const CellList = () => {
  const { rows, cols, visibility, toggleVisibility } = useGrid();

  const cells = Array.from({ length: rows * cols }, (_, i) => `Cell ${i + 1}`);

  return (
    <aside className={styles.cell_list}>
      <h1>List Items</h1>
      {cells.map((cell, index) => (
        <div
          className={
            visibility[index]
              ? `${styles.cell_item} ${styles.active}`
              : styles.cell_item
          }
          key={index}
          onClick={() => toggleVisibility(index)}
        >
          <span>{cell}</span>
          <span>{visibility[index] ? "👁️" : "🚫"}</span>
        </div>
      ))}
    </aside>
  );
};

export default CellList;
