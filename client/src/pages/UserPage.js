import React from "react";
import AddItem from "../components/AddItem";
import GiftList from "../components/GiftList";

function UserPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <AddItem />
        </div>
        <div className="col-md-8">
          <GiftList />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
