import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItem } from "../utils/API";

function AddItem() {
  let [item, setItem] = useState("");
  let [link, setLink] = useState("");
  const failure = () => {
    toast.error("An error occurred.", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  // useEffect(()=> {
  //   handleSubmit()
  // })

  function handleSubmit(event) {
    event.preventDefault();
    addItem({
      product: item,
      productLink: link,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        failure();
      });
  }

  // handleInputChange = (event) => {
  //   // This would better simplify event changes by consolidating them into one function
  //   const { name, value } = event.target;

  //   // Updating the input's state
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  return (
    <div className="container">
      <ToastContainer />
      <div className="card pb-2 px-2">
        <div className="card-header px-0">
          <h4>Add Item</h4>
        </div>
        <div className="card-content">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Item</label>
              <input
                value={item}
                name="item"
                onChange={(event) => setItem(event.target.value)}
                type="input"
                className="form-control"
                id="itemInput"
                aria-describedby="itemInput"
              />
              <small id="productHelp" className="form-text text-muted">
                To help your guests out, try to be as specific as possible{" "}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="itemLink">Link</label>
              <input
                value={link}
                name="link"
                onChange={(event) => setLink(event.target.value)}
                type="input"
                className="form-control"
                id="linkInput"
                placeholder="Optional"
              />
              <small id="linkHelp" className="form-text text-muted">
                You can include a link to an external listing for your product!
                This will help your guests find the perfect gifts for you!
              </small>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
