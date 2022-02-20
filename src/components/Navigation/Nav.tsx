import React, { FC, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { fetchLoggedIn } from "../../util";
import "./index.scss";


const Nav: FC = () => {
  // const history = useNavigate();
  const [cookies] = useCookies()
  const [loggedIn, setUser] = useState<User | undefined>();
  const cookie = cookies['USER_id'];
  useEffect(() => {
    
    if (cookie && cookie?.length > 4) {
    fetchLoggedIn(cookie).then((data) => {
      if (data) setUser(data as User);
    });
  }
  }, [cookie]);
  return (
     <>
      {window.location.pathname !== "/login" && <div className="navigation">
        <div className="nav__items">
          <Link to="/">
            <div className="nav__single">Home</div>
          </Link>
        </div>
        <Link to="/manage">
          <div className=" nav__single nav__items--profile">
            <span>{loggedIn?.name && loggedIn.name}</span>
            <img src={loggedIn?.propic || "/assets/propicph.jpg"} alt="" />
          </div>
        </Link>
      </div>}
    </>
  );
};
export default Nav;
