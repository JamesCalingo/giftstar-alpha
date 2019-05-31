import React from "react";

function SignUp() {
  return (
    <div>
      <div className="header text-center">
        <h1>Sign Up Here!</h1>
        You've made a great choice. By signing up for our service, you'll be able to create your own custom gift lists and registries for all of your important moments in life! Weddings, Baby Showers, Birthdays, you name it - we'll help you make it happen! <br></br>
        All we need is some info from you. Don't worry, we won't give it to anyone you don't trust (probably...)
      </div>

      <div className="container">
        <div className="card">
          <div className="card-body">

            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">This is what you'll use to log in to your account.</small>
              </div>
              <div class="form-group">
                <label for="InputPassword1">Password</label>
                <input type="password" class="form-control" id="InputPassword1" />
              </div>

              <div class="form-group">
                <label for="InputPassword2">Re-enter Password</label>
                <input type="password" class="form-control" id="InputPassword2" />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">First Name</label>
                <input type="email" class="form-control" id="firstName" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Last Name</label>
                <input type="email" class="form-control" id="lastName" />
              </div>

              <button type="submit" class="btn btn-primary">Sign me up!</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp