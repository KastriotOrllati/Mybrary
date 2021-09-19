import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.component";

import Homepage from "./Pages/homepage/Homepage";
import SignRegister from "./Pages/SignInRegister/SignInRegister";
import AdminPage from "./Pages/Admin/AdminPage";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Wishlist from "./Pages/Wishlist/Wishlist.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin">
            <Navbar />
            <SignRegister />
            <Footer />
          </Route>
          <Route path="/admin/">
            <AdminPage />
          </Route>
          <Route path="/AboutUs">
            <Navbar />
            <AboutUs />
            <Footer />
          </Route>
          <Route path="/Wishlist">
            <Navbar />
            <Wishlist />
            <Footer />
          </Route>
          <Route path="/">
            <Navbar />
            <Homepage />
            <Footer />
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
