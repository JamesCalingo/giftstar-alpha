import React from "react";

function Reset() {

  const message = event =>{
    event.preventDefault();
    alert("There was a problem processing your request. Mainly, that this isn't working QUITE yet.")
  }
  return (
    <div>
      <h1 className="text-center">Reset your password</h1>
      
      <div className="container">
      <div className="card px-2 py-3">
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Forgot your password? Simply enter your email address here and we'll help you reset your password.</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>

  <button type="submit" class="btn btn-primary" onClick={message}>Submit</button>
</form>
      </div>
    </div>
    </div>
  )
}

export default Reset