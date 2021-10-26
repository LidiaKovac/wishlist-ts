import React, { FC, useEffect, useState } from "react";
import { fetchData } from "../../util";

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
    const [prod, setProd] = useState<Prod>()
  return (
    <>
      <div className={isOpen ? "modal__wrap" : "modal__hide"} onClick={() => setOpen(false)}></div>
      <div className={isOpen ? "modal__inner " : "modal__hide"} onClick={() => console.log("hello")}>

        <h2>Add a new item</h2>

        <input type='text' onKeyDown={(ev:React.KeyboardEvent<HTMLInputElement>)=> {ev.key === 'Enter' && fetchData(ev.currentTarget.value).then(data => setProd(data))}}/>
        <button onClick={(ev:React.MouseEvent<HTMLButtonElement>)=> {fetchData(ev?.currentTarget?.parentElement?.querySelector("input")?.value!).then(data => setProd(data))} }> Find product</button>
        <img className='prod__img' src={prod?.image && prod.image}/>
        <span>{prod?.store && prod.store}</span>

      </div>
    </>
  );
};
export default Modal;
