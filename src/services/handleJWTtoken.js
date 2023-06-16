import axios from "axios";
const handleJwtToken = async () => {
  let dataList = await axios.get("/auth/admin/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return dataList;
};
export default handleJwtToken;
