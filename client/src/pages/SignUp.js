import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import  { createUser } from "../utils/API"
import { loginUser } from "../utils/API";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { NavLink } from 'react-router-dom';
// import { Redirect } from 'react-router'

const MySwal = withReactContent(Swal);

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
    loggedIn: false
  }

  missingField = () =>{
    toast.error("You forgot to fill in one of the fields. Please fill in all fields and then try again.",
    {position: toast.POSITION.BOTTOM_CENTER})
  }

  passwordCheck=()=>{
    toast.warn("Your passwords don't match.",
    {position: toast.POSITION.BOTTOM_CENTER})
  }

  shortPW = ()=>{
    toast.warn("Your password must be at least 8 characters long.", {position: toast.POSITION.BOTTOM_CENTER})
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
    
    if(this.state.email === "" || this.state.password===""||this.state.firstName===""||this.state.lastName===""||this.state.password2 ===""){
      this.missingField();
      return false
    }

    if(this.state.password !== this.state.password2){
      this.passwordCheck()
      return false
    }

    if(this.state.password.length > 8){
      this.shortPW();
      return false
    }

    createUser({
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    .then(userData => {
      console.log(userData);
      // MySwal.fire(
      //   {
      //     title: <p>Success!</p>,
      //     text: `Welcome, ${this.state.firstName}! We'll send you a confirmation email to ${this.state.email} soon, but for now, let's get you started!`,
      //     confirmButtonText: "Sweetness!",
      //   })
      loginUser({
        email: this.state.email,
        password: this.state.password
      });
     this.props.history.push("/Success")
    })
    .catch(err => {
      console.log(err);
      MySwal.fire({
        title: "Whoops!",
        text: "Looks like we ran into an error trying to log you in. Try again, and if the problem persists let us know."
      })
    })
    
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <div className="header text-center mb-3">
          <div className="container">
            <h1>Sign Up Here!</h1>
            <p className="signUpMessage">You've made a great choice. By signing up for our service, you'll be able to create your own custom registries and wish lists for all of your important moments in life! Weddings, Baby Showers, Birthdays, you name it - we'll help you make it happen!<br></br>
            All we need is some info from you. Don't worry, we won't give it to anyone you don't trust (probably...)</p>

            <h3>If you already have an account, you can <NavLink to="/LogIn">Log In</NavLink> here</h3>
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
                  <small id="passwordHelp" className="form-text text-muted">Password must be at least 8 characters long and should include at least one number and/or capital letter.</small>
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