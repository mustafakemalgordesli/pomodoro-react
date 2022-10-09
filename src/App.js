import "./App.css";
import Header from "./layouts/Header";
import Pomodoro from "./layouts/Pomodoro";
import Tasks from "./layouts/Tasks";

function App() {
  return (
    <div className="App">
      <Header />
      <Pomodoro />
      <Tasks />
    </div>
  );
}

export default App;
