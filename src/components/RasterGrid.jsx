import { useGrid } from "../store/GridContext";
import styles from "./RasterGrid.module.css";

const RasterGrid = () => {
  const { rows, cols, visibility } = useGrid();

  const gridStyle = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  };

  return (
    <section className={styles.image_display}>
      <img
        src="https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="background"
      />
      <div className={styles.raster_grid} style={gridStyle}>
        {Array.from({ length: rows * cols }, (_, i) => (
          <div
            key={i}
            className={
              visibility[i]
                ? styles.grid_cell
                : `${styles.grid_cell} ${styles.hide}`
            }
          >
            {`Cell ${i + 1}`}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RasterGrid;
