import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Product, User } from "../../classes";
import { SingleProduct } from "../../components/SingleProduct/Single";
import { Toast } from "../../components/Toast/Toast";
// import Modal from "../../components/Modal/Modal";
import { checkFavs, fetchData, fetchLoggedIn } from "../../util";

import "./Home.scss";

const Homepage = () => {
  const history = useNavigate();
  // const [favs, setFavs] = useState([]);
  // const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState<string>("");
  const [user, setUser] = useState<User>()
  const [prods, setProds] = useState<Array<Product>>();
  const [toastList, setToastList] = useState<Array<string>>([]);
  const findProduct = (ev: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    // if (ev.type === "Mouse")
    console.log(query);

    fetchData(query)
      .then(({ data, status }) => {
        console.log(status);

        if (status === 200 || status === 201) {
          setError("");
          setProds(data);
        } else setError(status);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    let cookie = document.cookie.split("USER_id=")[1];
    console.log(cookie);
    if (!cookie || cookie?.length === 0) {
      history("/login");
    } else {
      fetchLoggedIn(cookie).then((res)=> setUser(res))
    }

    //fetch existing favs
  }, []);
  return (
    <>
      <div className="home__wrap">
        {/* {favs.length > 0 ? <div>There are things in the favs</div> : <div>Looks like there's nothing to show. Why don't you start by <span onClick={()=> setModalOpen(!isModalOpen)}> adding </span> something? </div>} */}
        {/* <Modal isOpen={isModalOpen} setOpen={setModalOpen} /> */}
        {!prods && <h1> Are you feeling inspired today? </h1>}
        <div className="inputs">
          <input
            type="text"
            onKeyUp={(ev: React.KeyboardEvent<HTMLInputElement>) => {
              setQuery(ev.currentTarget.value);
              ev.key === "Enter" && findProduct(ev);
            }}
          />
          <button
            onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
              findProduct(ev);
            }}
          >
            🔎
          </button>
        </div>
        {loading ? (
          <Loader type="Hearts" color="#db5461" />
        ) : !error ? (
          <div className="prod__info">
            {prods?.length! > 0 &&
              prods?.map((p, i) => <SingleProduct product={p} key={i} isFavAlready={checkFavs(user!, Number(p.prod_id))} createToast={(title: string, action: string) => setToastList((old) => [...old, action])} />)}
          </div>
        ) : (
          "Error!"
        )}
      </div>
      {toastList.map((action: string, i: number) => (
        <Toast key={i} message={`Product ${action} wishlist`} />
      ))}
    </>
  );
};
export default Homepage;
