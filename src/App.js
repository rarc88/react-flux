import "./App.css";
import { Box } from "./components/box/Box";
import { Keypad } from "./components/keypad/Keypad";

function App() {
  return (
    <div className="App">
      <Keypad />
      <Box />
    </div>
  );
}

export default App;
