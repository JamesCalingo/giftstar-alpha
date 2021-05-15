import React, { useState } from "react";
import { createNewList } from "../utils/API";
import { toast, ToastContainer } from "react-toastify";

function CreateList() {
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(listName, description)
    createNewList({ listName, description })
      .then(({ data }) => {
        toast.success(`succesfully created ${listName}.`, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Unfortunately, something happened and we couldn't create your list..."
        );
      });
  };

  return (
    <>
      <div>
        <ToastContainer />
        <h1 className="text-center page-title">Create a new List!</h1>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="listName">list Name</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="listName"
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Add a description to help people understand what your list/list is for"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Create my list
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateList;
