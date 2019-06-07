import React from "react"
import { getMyData } from "../utils/API";

const users = ""
const registries= []


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
        this.setState({
          user: userData,
          registries: registries
        })
      })
   
  }

  render() {
    return (
      <div>
          
              <div className="container">
                <h1 className="text-center"> {this.state.user ? this.state.user.firstName : ""} {this.state.user ? this.state.user.lastName : ""}</h1>

                <div className="card">
                  <div className="card-header">My Registries</div>
                  <div className="card-content">
                    <ul>
                      {this.state.registries.map(regData=>{
                        return(
                          <li>{this.state.registries ? this.state.registries.registry : ""}
                          <button className="btn btn-info ml-3">Update</button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            
          

        </div>
        )
      }
}

export default Account