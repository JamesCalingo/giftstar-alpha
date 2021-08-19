import React, { useState, useEffect } from "react";
import PubList from "../components/PubList";
import { getMyData } from "../utils/API"

function PublicListView() {

  const [user, setUser] = useState({})

  useEffect(() => {
    getMyData(user)
    .then(data => {
      setUser(data)
    })
  }, [])

  return (
    <div>
    {user ? 
    <div className="container">
      <div className="row">
        
        <div className="col-md-8">
          <PubList />
        </div>
      </div>
    </div>
   : <div className="text-center">
     <h1>Gimme a sec here...</h1>
     <p>If nothing loads, check that you're logged in and try again.</p>
     </div>}
   </div>);
}

export default PublicListView;
