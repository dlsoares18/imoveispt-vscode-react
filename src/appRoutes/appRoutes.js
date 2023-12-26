import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "../webpages/home.js";
import User from "../components/getUser_Id";
import Register from "../webpages/register.js";
import Login from "../webpages/login.js";
import Advertisements from "../webpages/index.js";

const AppRoutes=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/user/:id" element={<User/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/advertisements" element={<Advertisements/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;