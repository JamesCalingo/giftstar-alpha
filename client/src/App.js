import React from 'react';
import Navbar from "./components/Navbar"
import './App.css';
import Welcome from "./pages/Welcome"


function App() {
  return (
    <div className="App">
     <div>
      <Navbar />
      <Welcome />
     </div>
    </div>
  );
}

export default App;
