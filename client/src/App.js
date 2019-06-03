import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Navbar from "./components/Navbar"
import './App.css';
import Welcome from "./pages/Welcome"
import SignUp from "./pages/SignUp"
import Login from "./components/Login"
import CreateList from "./pages/CreateList"
import RegistrySearch from "./pages/RegistrySearch"


function App() {
  return (
     <Router>
       <Navbar/>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/CreateList" component={CreateList} />
          <Route exact path="/RegistrySearch" component={RegistrySearch} />
        </Switch>
      </React.Fragment>
     </Router>
  );
}

export default App;
