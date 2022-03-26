import React from "react";
import { BrowserRouter as Router, useNavigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navigation/Nav";
import { Details } from "./views/Details/Details";
import Homepage from "./views/Home/Home";
import Login from "./views/Login";
import { Profile } from "./views/Profile/Profile";
function App() {



  

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          {/* {window.location?.pathname !== "/login" && <Nav />} */}

          <Route index element={<Homepage />}/>

          <Route path="login" element={<Login />}/>

          <Route path="manage" element={<Profile />}/>

          <Route path='details' element={<Details/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
