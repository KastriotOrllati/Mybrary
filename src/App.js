import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.component";

import Homepage from "./Pages/homepage/Homepage";
import SignRegister from "./Pages/SignInRegister/SignInRegister";
import AdminPage from "./Pages/Admin/AdminPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin">
            <SignRegister />
          </Route>
          <Route path="/admin/">
            <AdminPage />
          </Route>
          <Route path="/">
            <Navbar />
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
