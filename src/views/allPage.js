import AdMin from "../containers/Auth/Users/adminPage";
import HomePage from "./homPage";
import Login from "../containers/Auth/Login";
import Register from "../containers/Auth/Register";
import CreateUser from "./createUser";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function AllPage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/admin_page">
          <AdMin />
        </Route>
        <Route path="/create_user">
          <CreateUser />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AllPage;
