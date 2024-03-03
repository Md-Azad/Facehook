import { Link } from "react-router-dom";
import {useAuth} from "../hooks/useAuth.js"



const HomePage = () => {
    const {auth} = useAuth()
    console.log(auth);
    return (
        <div>
          
            <h1>HomePage--{auth?.user?.email}</h1>
            <Link to="/me">profile page</Link>
        </div>
    );
};

export default HomePage;