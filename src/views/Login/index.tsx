import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { fetchLoggedIn } from "../../util";
import "./login.scss";

const Login = ()=> {
    const [cookies, setCookie] = useCookies();
    const history = useNavigate()
    useEffect(()=> {
        let id:string = cookies['USER_id']
        console.log(id.length);
        
        if (id && id.length > 4) {
            fetchLoggedIn(id).then((data)=> {
                if(data) {
                    history("/")
                }
            })
        }
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
