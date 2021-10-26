import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Modal from "../../components/Modal/Modal";
import { fetchData } from "../../util";

// import "./index.scss";

const Homepage = () => {
  const history = useHistory(); 
  const [favs, setFavs] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    let cookie = document.cookie.split("USER_id=")[1];
    console.log(cookie);
    if (!cookie) {
      history.push("/login");
    } 

    //fetch existing favs
    
  }, []);
  return (
  <>
    <div className="home__wrap">
      {favs.length > 0 ? <div>There are things in the favs</div> : <div>Looks like there's nothing to show. Why don't you start by <span onClick={()=> setModalOpen(!isModalOpen)}> adding </span> something? </div>}
      <Modal isOpen={isModalOpen} setOpen={setModalOpen} />
    </div>
  </>
  );
};
export default Homepage;
