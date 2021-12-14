import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useNavigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navigation/Nav";
import Homepage from "./views/Home/Home";
import Login from "./views/Login";
import { Profile } from "./views/Profile/Profile";
function App() {
  const [img, setImg] = useState("");
  const [userData, setUser] = useState({});


  console.log(window.location?.pathname);

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          {/* {window.location?.pathname !== "/login" && <Nav />} */}

          <Route index element={<Homepage />}/>

          <Route path="login" element={<Login />}/>

          <Route path="manage" element={<Profile />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
