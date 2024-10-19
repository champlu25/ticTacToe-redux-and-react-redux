import styles from "./information.module.css";

// stateless-компонент
export const InformationLayout = ({
  isDraw,
  isGameEnded,
  currentPlayer,
  winner,
}) => {
  return (
    <div className={styles.statusGame}>
      {isGameEnded && !isDraw ? `Победа: ${winner}` : null}
      {isDraw ? "Ничья" : null}
      {!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : null}
    </div>
  );
};
