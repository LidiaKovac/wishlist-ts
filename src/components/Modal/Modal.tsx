import React, { FC, useEffect, useState } from "react";
import { fetchData } from "../../util";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import "./Modal.scss";
interface Modal {
  isOpen: boolean;
  setOpen: Function;
}
interface Prod {
  image: string;
  store: string;
}
const Modal: FC<Modal> = ({ isOpen, setOpen }) => {
  const [prod, setProd] = useState<Prod>();
  const [loading, setLoading] = useState(false);
  const findProduct = (ev: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>) => {
    setLoading(true);
    fetchData(ev.currentTarget.value)
      .then((data) => setProd(data))
      .finally(() => setLoading(false));
  };
  return (
    <>
      <div className={isOpen ? "modal__wrap" : "modal__hide"} onClick={() => setOpen(false)}></div>
      <div className={isOpen ? "modal__inner " : "modal__hide"} onClick={() => console.log("hello")}>
        <h2>Add a new item</h2>
      </div>
        
    </>
  );
};
export default Modal;
