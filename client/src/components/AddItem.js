import React from "react";

class AddItem extends React.Component {
  state = {
    item: "",
    link: "",
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header"><h4>Registry settings</h4>
          </div>
          <div className="card-content">
            You must be logged in as the owner of this registry to perform this action.<br />
            This would be a page to add/delete items from the list and also delete the registry (for whatever reason). Only the owner of the registry can access this, and it'd probably be similar to most social media sites where your view of your page is different from others
      </div>
        </div>
      </div>
    )
  }
}

export default AddItem