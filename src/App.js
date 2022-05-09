import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Path from "./Route/Path";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Path />
      </div>
    </Router>
  );
}

export default App;
