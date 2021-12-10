import { FC, useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Toast.scss";
interface ToastProps {
  message: string;
}
export const Toast: FC<ToastProps> = ({ message }) => {
    const [isHidden, setHidden] = useState(true)
    useEffect(()=> {
        setHidden(false)
        setTimeout(()=> { //hides itself after 2 seconds
            setHidden(true)
        }, 2000)
    }, [])
  return (
    <div className={isHidden ? "toast__wrap hide" : "toast__wrap"}>
      <AiFillCloseCircle onClick={()=> setHidden(true)} />
      <div className='toast__message'> {message} </div>
    </div>
  );
};
