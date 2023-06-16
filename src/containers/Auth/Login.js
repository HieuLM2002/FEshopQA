import "../Auth/Login.scss";

import { useState, useEffect } from "react";
import { handleLoginApi } from "../../services/userService";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwtdecode from "jwt-decode";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [showPassWord, setShowPassWord] = useState(true);
  let [errMessge, setErrMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOnChangeInputUserName = (event) => {
    let username = event.target.value;
    setUserName(username);
    if (username !== "") {
      setErrMessage("");
    }
  };
  const handleOnChangeInputPassWord = (event) => {
    let password = event.target.value;
    setPassWord(password);
    if (password !== "") {
      setErrMessage("");
    }
  };
  const handleOnClickLogin = async () => {
    try {
      let dataLoginApi = await handleLoginApi(username, password);
      const accessToken = dataLoginApi.data.accessToken;
      localStorage.setItem("access_token", accessToken);
      const payloadDecoded = jwtdecode(accessToken);
      const userLogin = payloadDecoded;
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: userLogin,
      });
      if (
        payloadDecoded.role === "customer" ||
        payloadDecoded.role === "sales agent"
      ) {
        history.push("/");
      } else {
        history.push("/admin_page");
      }
    } catch (error) {
      let messCheck = error.response.data.message1;
      let dataEmpty = error.response.data.message;
      if (dataEmpty) {
        setErrMessage(dataEmpty);
      } else {
        setErrMessage(messCheck);
      }
    }
  };
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleOnClickLogin();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [username, password]);
  const handleShowPassWord = () => {
    setShowPassWord(!showPassWord);
  };
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content row">
          <div className="col-12 text-center text-login">Login</div>
          <div className="col-12 form-group login-input">
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your UserName"
              onChange={(event) => handleOnChangeInputUserName(event)}
            />
          </div>
          <div className="col-12 form-group login-input">
            <label>PassWord</label>
            <input
              type={showPassWord ? "password" : "text"}
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
          <div className="col-12" style={{ color: "red" }}>
            {errMessge}
          </div>
          <div className="col-12 ">
            <button className="btn-login" onClick={() => handleOnClickLogin()}>
              Login
            </button>
          </div>

          <div className="col-12">
            <span className="forgot-password">Forgot your password?</span>
            <br />
            <span className="register-qs">
              You are not have account?<Link to="/register">Register here</Link>
            </span>
          </div>
        </div>
        <div className="col-12 text-center mt-3">
          <span className="text-other-login">Or Login with:</span>
        </div>
        <div className="col-12 social-login">
          <i className="fa-brands fa-facebook fb"></i>
          <i className="fa-brands fa-google-plus-g gg"></i>
        </div>
      </div>
    </div>
  );
}
export default Login;
