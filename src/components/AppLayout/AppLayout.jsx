import "../../App.css";
import { Information, Field } from "../../components";

export const AppLayout = ({ onRestart }) => {
  return (
    <>
      <Information />
      <Field />
      <button
        className="restart-btn"
        onClick={() => {
          onRestart();
        }}
      >
        Начать заново
      </button>
    </>
  );
};
