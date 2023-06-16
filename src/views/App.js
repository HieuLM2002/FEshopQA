import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AllPage from "./allPage";
import "../containers/config/common";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Switch>{AllPage()}</Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
