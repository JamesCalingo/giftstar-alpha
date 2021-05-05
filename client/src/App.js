import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import Login from "./components/Login";
import CreateList from "./pages/CreateList";
import UserSearch from "./pages/UserSearch";
import Account from "./components/Account";
import AddItem from "./components/AddItem";
import GiftList from "./components/GiftList";
import Reset from "./pages/Reset";
import Success from "./pages/Success";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/CreateList" component={CreateList} />
          <Route exact path="/UserSearch" component={UserSearch} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/AddItem" component={AddItem} />
          <Route exact path="/GiftList" component={GiftList} />
          <Route exact path="/Reset" component={Reset} />
          <Route exact path="/Success" component={Success} />
          <Route exact path="/UserPage" component={UserPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
