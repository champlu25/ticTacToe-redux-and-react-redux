import styles from "./information.module.css";
import { useSelector } from "react-redux";
import {
  selectCurrentPlayer,
  selectIsDraw,
  selectIsGameEnded,
} from "../../selectors";

// stateless-компонент
const InformationLayout = () => {
  const isDraw = useSelector(selectIsDraw);
  const isGameEnded = useSelector(selectIsGameEnded);
  const currentPlayer = useSelector(selectCurrentPlayer);
  const winner = useSelector((state) => state.winner);

  return (
    <div className={styles.statusGame}>
      {isGameEnded && !isDraw ? `Победа: ${winner}` : null}
      {isDraw ? "Ничья" : null}
      {!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : null}
    </div>
  );
};

// statefull-компонент
const Information = () => {
  return <InformationLayout />;
};

export default Information;
