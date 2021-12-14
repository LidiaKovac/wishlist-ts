import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLoggedIn } from "../../util";
import "./login.scss";

const Login = ()=> {
    
    const history = useNavigate()
    useEffect(()=> {
        const id = document.cookie.split("USER_id=")[1]
        console.log(id?.length);
        if (id && id.length > 0) {
            fetchLoggedIn(id).then((data)=> {
                if(data) {
                    history("/")
                }
            })
        }
        // if(String(id).length > 0) {
        //     fetchLoggedIn(id).then((data)=> {
        //         if (data) {
        //             history("/")
        //         }
        //     })
        // }
    }, [])
    return (<>
    <div className="login__wrap">
        <h1>Wishlist.</h1>
        <div className="login__inner">
        <h3>Welcome back!</h3>
        <a href={process.env.REACT_APP_BE_URL + '/api/user/google'}> <img src='/assets/gologo.png'/> Login with Google</a>
        </div>
    </div>
    </>)
}
export default Login;
