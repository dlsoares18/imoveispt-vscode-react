import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "../components/listOfAdvertising";
import User from "./user";
import Facto from "./facto";
import Teste from "./teste";

const Webpages=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/user/:id" element={<User/>}/>
            <Route exact path="/lista" element={<Facto/>}/>
            <Route exact path="/teste" element={<Teste/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Webpages;