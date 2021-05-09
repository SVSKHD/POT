import {BrowserRouter as Router , Route , Switch } from "react-router-dom" 

// pages
import Home from "./pages/home"

function App() {
  return (
  <div>
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
    </Router>
  </div>
  );
}

export default App;
