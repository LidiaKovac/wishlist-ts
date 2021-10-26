import { useEffect } from "react";
import { useHistory } from "react-router";
import { useLoggedIn } from "../../util";
import "./login.scss";

const Login = ()=> {
    const logged = useLoggedIn()
    const history = useHistory()
    useEffect(()=> {
        logged.then((data)=> {
            if (data) {
               history.push("/")
            }
        })
    })
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
