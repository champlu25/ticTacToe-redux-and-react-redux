import "../../App.css";
import { Information, Field } from "../../components";
import { store } from "../../store";

export const AppLayout = () => {
  return (
    <>
      <Information />
      <Field />
      <button
        className="restart-btn"
        onClick={() => {
          store.dispatch({ type: "RESTART_GAME" });
        }}
      >
        Начать заново
      </button>
    </>
  );
};
