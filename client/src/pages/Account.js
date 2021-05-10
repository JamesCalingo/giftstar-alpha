import React from "react";
import { getMyData, showMyLists } from "../utils/API";
import { NavLink } from "react-router-dom";

function Account() {
  const [user, setUser] = useState({});
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getMyData(user).then(({ data: userData }) => {
      showMyLists(lists).then(({ data: listsData }) => {
        setUser(userData);
        setLists(listsData);
      });
    });
  }, [lists]);

  return (
    <div>
      {this.state.user ? (
        <div className="container">
          <h1 className="text-center">
            {this.state.user.firstName} {this.state.user.lastName}
          </h1>

          <div className="card">
            <div className="card-header">My Registries</div>
            <div className="card-content">
              <ul>
                {this.state.registries.map((regData) => {
                  return (
                    <li className="border-bottom" key={regData.id}>
                      <strong>{regData.registry}</strong> | {regData.type}{" "}
                      <br />
                      <NavLink to="/RegistryList" className="btn btn-info ml-3">
                        View/Update
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <NavLink to="/CreateList" className="btn btn-primary mx-2">
                {this.state.user ? (
                  "Create New Registry"
                ) : (
                  <NavLink to="Login" class="text-light">
                    Log In
                  </NavLink>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <h1>No account is signed in right now</h1>
      )}
    </div>
  );
}

export default Account;
