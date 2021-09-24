import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
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
import { getUser } from "./Utils/getUser";

import { useEffect, useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState();

  let location = useLocation();

  useEffect(() => {
    let response = authHeader();

    if (response.Authorization) {
      setLogin(true);
    }
    let user = getUser();
    setUser(user);
  }, [login]);
  useEffect(() => {}, [location]);

  return (
    <div className="App">
      <Router>
        {location.pathname.includes("/admin") ? null : <Navbar login={login} />}
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
      </Router>
      <Router>
        <Route path="/admin/">
          <AdminPage />
        </Route>
      </Router>
      {location.pathname.includes("/admin") ? null : <Footer />}
    </div>
  );
}

export default App;
