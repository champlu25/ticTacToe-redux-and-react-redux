import styles from "./field.module.css";

// stateless-компонент
// Игровое поле 3x3 (9 кнопок)
export const FieldLayout = ({ field, isGameEnded, currentPlayer, onClick }) => {
  return (
    <div className={styles.playingField}>
      {field.map((cell, index) => (
        <button
          disabled={field[index] !== "" || isGameEnded}
          onClick={() => onClick(currentPlayer, index)}
          key={index}
          className={styles.cell}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};
