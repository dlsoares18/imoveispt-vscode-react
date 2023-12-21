import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./home";
import User from "../components/getUser_Id";

const Webpages=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/user/:id" element={<User/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Webpages;