import "../Auth/Login.scss";
import { useState } from "react";
import { handleRegisterApi } from "../../services/userService";
function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
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

  const handleOnClickRegister = async () => {
    try {
      await handleRegisterApi(username, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const handleShowPassWord = () => {
    setShowPassWord(!showPassWord);
  };
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content row">
          <div className="col-12 text-center text-login">Register</div>
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
          <div className="col-12 ">
            <button
              className="btn-login"
              onClick={() => handleOnClickRegister()}
            >
              Register
            </button>
          </div>
        </div>
        <div className="col-12 text-center mt-3">
          <span className="text-other-login">Or Register with:</span>
        </div>
        <div className="col-12 social-login">
          <i className="fa-brands fa-facebook fb"></i>
          <i className="fa-brands fa-google-plus-g gg"></i>
        </div>
      </div>
    </div>
  );
}
export default Register;
