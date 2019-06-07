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

notify = () => toast("Wow so easy !");
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
    title: "You're in!"
  })
  this.setState({
    loggedIn: true
  })
})
.catch(err => {
  console.log(err);
  MySwal.fire({
    title: "Sorry!",
    text: "There was a problem logging in. Check that your email and password are correct and then try again."
  })
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
            <h5 className="mb-3">Don't have an account yet? Sign Up Here!</h5>
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
            I forgot something!
         
        </div>
        </div>
      </div>
    </div>
  )
  }
}

export default Login