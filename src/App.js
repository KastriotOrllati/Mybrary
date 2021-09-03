import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.component";

import Admin from "./Pages/SignInRegister/SignInRegister";
import Homepage from "./Pages/homepage/Homepage";
import SignRegister from "./Pages/SignInRegister/SignInRegister";

function App() {
  return (
    <div className="App">
      <h1>hi</h1>

      <Router>
        <Navbar />
        <Switch>
          <Route path="/signin">
            <SignRegister />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// <Route path="/signin">

//   <SignInRegister />
// </Route>
