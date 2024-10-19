import styles from "./field.module.css";
import { store } from "../../store";
import { useSelector } from "react-redux";
import {
  selectCurrentPlayer,
  selectField,
  selectIsGameEnded,
} from "../../selectors";

// stateless-компонент
// Игровое поле 3x3 (9 кнопок)
const FieldLayout = () => {
  const field = useSelector(selectField);
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);

  const onClick = (currentPlayer, index) => {
    const updatedField = [...field];
    updatedField[index] = currentPlayer;

    store.dispatch({
      type: "SET_FIELD",
      payload: { currentPlayer, index },
    });

    const WIN_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Варианты побед по горизонтали
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Варианты побед по вертикали
      [0, 4, 8],
      [2, 4, 6], // Варианты побед по диагонали
    ];

    // Проверка на победу
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      const xWin = WIN_PATTERNS[i].every((el) => updatedField[el] === "X");
      const oWin = WIN_PATTERNS[i].every((el) => updatedField[el] === "O");

      if (xWin) {
        store.dispatch({ type: "SET_WINNER", payload: "X" });
        store.dispatch({ type: "SET_STATUS_GAME_END", payload: true });
        return;
      }

      if (oWin) {
        store.dispatch({ type: "SET_WINNER", payload: "O" });
        store.dispatch({ type: "SET_STATUS_GAME_END", payload: true });
        return;
      }
    }

    // Проверка на ничью
    const isFinish = updatedField.every((el) => el !== "");
    if (isFinish) {
      store.dispatch({ type: "SET_STATUS_GAME_DRAW", payload: true });
      store.dispatch({ type: "SET_STATUS_GAME_END", payload: true });
    } else {
      store.dispatch({
        type: "SET_CURRENT_PLAYER",
        payload: currentPlayer === "X" ? "O" : "X",
      });
    }
  };

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

// statefull-компонент:
const Field = () => {
  return <FieldLayout />;
};

export default Field;
