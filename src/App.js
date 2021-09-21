import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.component";

import Homepage from "./Pages/homepage/Homepage";
import SignRegister from "./Pages/SignInRegister/SignInRegister";
import AdminPage from "./Pages/Admin/AdminPage";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Wishlist from "./Pages/Wishlist/Wishlist.component";
import BookView from "./Components/BookView/BookView.component";
import { authHeader } from "./Utils/authHeader";
import { useEffect, useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    let response = authHeader();

    if (response.Authorization) {
      setLogin(true);
    }
  }, [login]);

  return (
    <div className="App">
      <Router>
        <Navbar login={login} />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/book/:slug" component={BookView} />
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route
            path="/signin"
            render={() => (login ? <Redirect to="/" /> : <SignRegister />)}
          />
          <Route path="/Wishlist">
            <Wishlist />
          </Route>
        </Switch>
        <Route path="/admin/">
          <AdminPage />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

// <Route path="/signin">
//   <SignInRegister />
// </Route>
