import styles from "./CellList.module.css";

const CellList = ({ rows, cols, visibility, toggleVisibility }) => {
  const cells = Array.from({ length: rows * cols }, (_, i) => `Cell ${i + 1}`);

  return (
    <div className={styles.cell_list}>
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
    </div>
  );
};

export default CellList;
