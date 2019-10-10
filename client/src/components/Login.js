import React from "react";
import {loginUser} from "../utils/API"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const MySwal = withReactContent(Swal)

class Login extends React.Component {
  
state = {
  email: "",
  password: "",
  loggedIn: false
}

notify = () => {
toast.error("Login failed! Check your email and password then try again.", {
  position: toast.POSITION.BOTTOM_CENTER
});
}
handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  const { name, value } = event.target;

  // Updating the input's state
  this.setState({
    [name]: value
  });
};

handleLogin = event => {
  event.preventDefault();
loginUser({
  email: this.state.email,
  password: this.state.password
}).then(() =>{
  MySwal.fire({
    title: "You're in!",
    type: "success"
  },
  function(){
    window.location.href="/Account"
  })
  this.setState({
    loggedIn: true
  })
})
.catch(err => {
  console.log(err);
  this.notify()
})
}


  render (){
  return (
    <div>
         <ToastContainer />
      <h1 className="text-center">Log In to Your Account</h1>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="mb-3">Don't have an account yet? <a href = "/SignUp">Sign Up Here!</a></h5>
            <form>
              <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input value={this.state.email} name="email" onChange={this.handleInputChange} type="email" className="form-control" id="InputEmail" aria-describedby="email" />

              </div>
              <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input  value={this.state.password} name="password" onChange={this.handleInputChange} type="password" className="form-control" id="InputPassword" />
              </div>

              <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Log in</button>
            </form> <br />
            <a href="/Reset">I forgot my password!</a>
         
        </div>
        </div>
      </div>
    </div>
  )
  }
}

export default Login