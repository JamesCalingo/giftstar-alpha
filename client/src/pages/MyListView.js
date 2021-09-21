import React, { useState, useEffect } from "react";
import AddItem from "../components/AddItem";
import MyList from "../components/MyList";
import { getMyData } from "../utils/API"

function UserListPage() {

  const [user, setUser] = useState({})

  useEffect(() => {
    getMyData(user)
    .then(data => {
      setUser(data)
    })
  }, [])

  return (
    <div className="mt-5">
    {user ? 
    <div className="container ">
      <div className="row">
        <div className="col-md-4">
          <AddItem />
        </div>
        <div className="col-md-8">
          <MyList />
        </div>
      </div>
    </div>
   : <div className="text-center mt-5">
     <h1>Gimme a sec here...</h1>
     <p>If nothing loads, check that you're logged in and try again.</p>
     </div>}
   </div>);
}

export default UserListPage;
