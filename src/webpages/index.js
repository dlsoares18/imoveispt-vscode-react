import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./home";
import User from "./user";
import Facto from "./facto";
const Webpages=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/user/:id" element={<User/>}/>
            <Route exact path="/lista" element={<Facto/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Webpages;