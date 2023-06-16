import axios from "axios";
import jwtdecode from "jwt-decode";
import { useHistory } from "react-router-dom";
const handleLoginApi = (userName, userPassword) => {
  const response = axios.post("/", {
    name: userName,
    password: userPassword,
  });
  return response;
};
const handleRegisterApi = async (userName, userEmail, userPassword) => {
  try {
    const response = await axios.post("/register", {
      name: userName,
      email: userEmail,
      password: userPassword,
    });
    if (response.status === 200) {
      alert("Thành công");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const handleCreateUserApi = async (userName, userEmail, userPassword, role) => {
  try {
    const response = await axios.post("/auth/admin/user/create_user", {
      name: userName,
      email: userEmail,
      password: userPassword,
      role: role,
    });
    if (response.status === 200) {
      window.location.href = "/admin_page";
    }
  } catch (error) {
    console.log(error);
  }
};
const handDeleteUserById = (userId) => {
  const response = axios.delete(`/auth/admin/delete-user/${userId}`);
  return response;
};
export {
  handleRegisterApi,
  handleLoginApi,
  handleCreateUserApi,
  handDeleteUserById,
};
