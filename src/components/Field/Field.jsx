import { store } from "../../store";
import { useSelector } from "react-redux";
import { FieldLayout } from "./FieldLayout";
import {
  selectCurrentPlayer,
  selectField,
  selectIsGameEnded,
} from "../../selectors";

// statefull-компонент:
export const Field = () => {
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
    <FieldLayout
      field={field}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
      onClick={onClick}
    />
  );
};
