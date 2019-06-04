import React from "react";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
    loggedIn: false
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleUserCreate = event => {
    event.preventDefault();
    alert(`Hello ${this.state.firstName} ${this.state.lastName}! a confirmation email will be sent to ${this.state.email}.`)
  }

  render() {
    return (
      <div>
        <div className="header text-center mb-3">
          <div className="container">
            <h1>Sign Up Here!</h1>
            <p className="signUpMessage">You've made a great choice. By signing up for our service, you'll be able to create your own custom registries and wish lists for all of your important moments in life! Weddings, Baby Showers, Birthdays, you name it - we'll help you make it happen!<br></br>
            All we need is some info from you. Don't worry, we won't give it to anyone you don't trust (probably...)</p>
      </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="card-body">
          <h5>All fields are required.</h5> <br></br>
              <form>
                <div className="form-group">
                  <label htmlFor="InputEmail">Email address</label>
                  <input value={this.state.email} name="email" onChange={this.handleInputChange} type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">This is what you'll use to log in to your account.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="InputPassword1">Password</label>
                  <input value={this.state.password} name="password" onChange={this.handleInputChange} type="password" className="form-control" id="InputPassword1" />
                </div>

                <div className="form-group">
                  <label htmlFor="InputPassword2">Re-enter Password</label>
                  <input value={this.state.password2} name="password2" onChange={this.handleInputChange} type="password" className="form-control" id="InputPassword2" />
                </div>

                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input value={this.state.firstName} name="firstName" onChange={this.handleInputChange} type="input" className="form-control" id="firstName" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input value={this.state.lastName} name="lastName" onChange={this.handleInputChange} type="input" className="form-control" id="lastName" />
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.handleUserCreate}>Sign me up!</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp