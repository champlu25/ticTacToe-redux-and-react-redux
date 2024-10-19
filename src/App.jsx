import { AppLayout } from "./components/AppLayout/AppLayout";
import { store } from "./store";

function App() {
  const onRestart = () => {
    store.dispatch({ type: "RESTART_GAME" });
  };
  return <AppLayout onRestart={onRestart} />;
}

export default App;
