import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchLoggedIn } from "../../util";
import "./index.scss";

interface User {
  name: string;
  googleID: string;
  propic: string;
  favs: Array<any>;
}
const Nav: FC = () => {
  // const history = useNavigate();
  const [loggedIn, setUser] = useState<User | undefined>();
  useEffect(() => {
    const id = document.cookie.split("USER_id=")[1]
    fetchLoggedIn(id).then((data) => {
      if(data)  setUser(data as User)})
      
  }, []);
  return (
    <>
      <div className="navigation">
        <div className="nav__items">
            <Link to='/'>
          <div className="nav__single">Home</div>
            </Link>
        </div>
        <Link to="/manage">
          <div className=" nav__single nav__items--profile">
            <span>{loggedIn?.name && loggedIn.name}</span>
            <img src={loggedIn?.propic || "/assets/propicph.jpg"} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};
export default Nav;
