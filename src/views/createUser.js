import "../containers/Auth/Login.scss";
import { useState } from "react";
import { handleCreateUserApi } from "../services/userService";
function CreateUser() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [role, setRole] = useState("customer");
  const [showPassWord, setShowPassWord] = useState(true);
  const handleOnChangeInputUserName = (event) => {
    let username = event.target.value;
    setUserName(username);
  };
  const handleOnChangeInputEmail = (event) => {
    let email = event.target.value;
    setEmail(email);
  };

  const handleOnChangeInputPassWord = (event) => {
    let password = event.target.value;
    setPassWord(password);
  };
  const handleSubmitCreateUser = (event) => {
    let roleInput = event.target.value;
    setRole(roleInput);
  };
  const handleShowPassWord = () => {
    setShowPassWord(!showPassWord);
  };
  const handleOnClickCreateUser = async () => {
    try {
      await handleCreateUserApi(username, email, password, role);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content row">
          <div className="col-12 text-center text-login">Create User</div>
          <div className="col-12 form-group login-input">
            <label>UserName</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your UserName"
              onChange={(event) => handleOnChangeInputUserName(event)}
            />
          </div>
          <div className="col-12 form-group login-input">
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter your Email"
              onChange={(event) => handleOnChangeInputEmail(event)}
            />
          </div>
          <div className="col-12 form-group login-input">
            <label>PassWord</label>
            <input
              type={showPassWord ? "password" : "text"}
              name="password"
              className="form-control"
              placeholder="Enter your PassWord"
              onChange={(event) => handleOnChangeInputPassWord(event)}
            />
            <i
              className={
                showPassWord
                  ? "fa-regular fa-eye-slash icon-eye"
                  : "fa-regular fa-eye icon-eye"
              }
              onClick={() => handleShowPassWord()}
            ></i>
          </div>
          <div className="col-12 form-group login-input">
            <label>Role</label>
            <select
              name="role"
              className="form-control"
              onChange={(event) => handleSubmitCreateUser(event)}
            >
              <option value="customer">Customer</option>
              <option value="sales agent">Sales Agent</option>
              <option value="admin">ADmin</option>
            </select>
          </div>
          <div className="col-12 ">
            <button
              className="btn-login"
              onClick={() => handleOnClickCreateUser()}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
