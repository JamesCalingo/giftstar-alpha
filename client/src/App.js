import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CreateList from "./pages/CreateList";
import Search from "./pages/Search";
import Account from "./pages/Account";
import Reset from "./pages/Reset";
import Success from "./pages/Success";
import MyListView from "./pages/MyListView";
import PublicListView from "./pages/PublicListView"

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createlist" component={CreateList} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/mylist" component={MyListView} />
          <Route exact path="/viewlist" component={PublicListView} />
      </>
    </HashRouter>
  );
}

export default App;
