import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  useHistory,
  useLocation,
  Route,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Navigation/Nav";
import { fetchData, useLoggedIn } from "./util";
import Homepage from "./views/Home/Home";
import Login from "./views/Login";
function App() {
  const [img, setImg] = useState("");
  const [userData, setUser] = useState({})

  const history = useHistory();
  console.log(window.location?.pathname);
  
  return (
    <>
      <BrowserRouter>
      
        <Route path="/">
          {window.location?.pathname !== "/login" && <Nav />}
        </Route>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
