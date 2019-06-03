import React from "react";

function Login() {
  return (
    <div>
      <h1 className="text-center">Log In to Your Account</h1>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="mb-3">Don't have an account yet? Sign Up Here!</h5>
            <form>
              <div class="form-group">
                <label for="InputEmail">Email address</label>
                <input type="email" class="form-control" id="InputEmail" aria-describedby="email" />

              </div>
              <div class="form-group">
                <label for="InputPassword">Password</label>
                <input type="password" class="form-control" id="InputPassword" />
              </div>

              <button type="submit" class="btn btn-primary">Log in</button>
            </form> <br />
            I forgot something!
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login