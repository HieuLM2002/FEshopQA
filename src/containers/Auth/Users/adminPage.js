import "../../../styles/admin.scss";
import handleJwtToken from "../../../services/handleJWTtoken";
import jwtdecode from "jwt-decode";
import { handDeleteUserById } from "../../../services/userService";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function AdMin() {
  const stateCurrent = useSelector((state) => state.auth);
  const users = useSelector((state) => {
    return state.user;
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleDataJWTToken = async () => {
    try {
      const response = await handleJwtToken();
      dispatch({
        type: "GET_USER_LIST",
        payload: response.data,
      });
    } catch (error) {
      if (error.response.status === 401) {
        history.push("/");
      }
    }
  };
  const handleDeleteUser = async (userId) => {
    const deleUser = await handDeleteUserById(userId);
    dispatch({
      type: "REMOVE_USER",
      payload: userId,
    });
  };
  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    history.push("/");
  };
  const decodeJwtShowAdmin = () => {
    const accessToken = localStorage.getItem("access_token");
    const payloadDecoded = jwtdecode(accessToken);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: payloadDecoded,
    });
  };
  useEffect(() => {
    decodeJwtShowAdmin();
    handleDataJWTToken();
  }, []);
  //
  return (
    <div className="admin-background">
      <div className="admin-containerNav">
        <div className="admin-aside">
          <h4 className="admin-text">ADmin Page</h4>
          <span className="user-account">
            ADmin:{stateCurrent.user.username}
          </span>
          <div className="admin-aside-content">
            <div className="admin-listaccount">
              <button className="btn-listAccount">Account</button>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-content">
        <div className="admin-nav">
          <ul>
            <li>
              <button
                className="btn btn-primary"
                onClick={() => handleLogOut()}
              >
                LogOut
              </button>
            </li>
          </ul>
          <div className="show-listuser">
            <table className="user-list-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th colSpan="2">
                    Action<a href="/create_user"> Create</a>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.length > 0 &&
                  users.map((items) => {
                    return (
                      <tr key={items.id}>
                        <td>{items.id}</td>
                        <td>{items.username}</td>
                        <td>{items.email}</td>
                        <td>{items.role}</td>
                        <td>
                          <button href="#1" className="btn-edit">
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn-delete"
                            onClick={() => handleDeleteUser(items.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdMin;
