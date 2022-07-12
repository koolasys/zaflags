import "../styles/main.css";
import Home from "./Home";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <div id="mainView">
        <Menu/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
