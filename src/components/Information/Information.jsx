import { useSelector } from "react-redux";
import { InformationLayout } from "./InformationLayout";
import {
  selectCurrentPlayer,
  selectIsDraw,
  selectIsGameEnded,
} from "../../selectors";

// statefull-компонент
export const Information = () => {
  const isDraw = useSelector(selectIsDraw);
  const isGameEnded = useSelector(selectIsGameEnded);
  const currentPlayer = useSelector(selectCurrentPlayer);
  const winner = useSelector((state) => state.winner);

  return (
    <InformationLayout
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
      winner={winner}
    />
  );
};
