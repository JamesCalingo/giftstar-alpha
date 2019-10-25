import React from "react"
import { getMyData, showMyRegistries } from "../utils/API";
import { NavLink } from 'react-router-dom';

const users = ""



// WHAT IS BEING DONE WITH THIS PAGE:
// An API call is made to the ENTIRE database. It SHOULD bring back the user data of the currently logged in user as well as any registries tied to their user ID. What I need to figure out is how to import that data (it will probably all be in state) and then rendering it.

class Account extends React.Component {
  state = {
    users: "",
    registries: []
  }

  componentDidMount() {
    getMyData(users)
      .then(({data: userData}) =>{
        console.log(userData);
        showMyRegistries()
        .then(({data: registryData}) =>{
          console.log (registryData);
        this.setState({
          user: userData,
          registries: registryData
        })
      })
      })
   
  }

  render() {
    return (
      <div>
          
              <div className="container">
                <h1 className="text-center"> {this.state.user ? this.state.user.firstName : <NavLink to="Login">You must be logged in to see this! </NavLink>} {this.state.user ? this.state.user.lastName : ""}</h1>

                <div className="card">
                  <div className="card-header">My Registries</div>
                  <div className="card-content">
                    <ul>
                      {this.state.registries.map(regData=>{
                        return(
                          <li className="border-bottom" key={regData.id}><strong>{regData.registry}</strong> | {regData.type} <br />
                          <NavLink to="/RegistryList" className="btn btn-info ml-3">View/Update</NavLink>
                          </li>
                        )
                      })}
                    </ul>
                    <NavLink to="/CreateList" className="btn btn-primary mx-2">Create New Registry</NavLink>
                  </div>
                </div>
              </div>
            
          

        </div>
        )
      }
}

export default Account