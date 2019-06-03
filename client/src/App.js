import React from 'react';
import Navbar from "./components/Navbar"
import './App.css';
import Welcome from "./pages/Welcome"
import SignUp from "./pages/SignUp"
import Login from "./components/Login"
import CreateList from "./pages/CreateList"
import RegistrySearch from "./pages/RegistrySearch"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <div>
      <Navbar />
      <Welcome />
      <SignUp />
      <Login />
      <CreateList />
      <RegistrySearch />
     </div>
    </div>
  );
}

export default App;
