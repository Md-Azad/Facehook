import Header from "../components/common/Header";
import {useAuth} from "../hooks/useAuth.js"



const HomePage = () => {
    const {auth} = useAuth()
    console.log(auth);
    return (
        <div>
            <Header />
            <h1>HomePage</h1>
        </div>
    );
};

export default HomePage;