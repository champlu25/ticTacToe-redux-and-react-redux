import "./App.css";
import Field from "./components/Field/Field";
import Information from "./components/Information/Information";
import { store } from "./store";

const AppLayout = () => {
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

function App() {
  return <AppLayout />;
}

export default App;
