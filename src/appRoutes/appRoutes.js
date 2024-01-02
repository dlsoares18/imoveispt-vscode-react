import {BrowserRouter,Route,Routes} from "react-router-dom";
import User from "../components/getUser_Id";
import Register from "../webpages/register.js";
import Login from "../webpages/login.js";
import Advertisements from "../webpages/index.js";
import CreateAdvertisement from "../webpages/createAdvertisement.js";
import AdvertisementDetails from "../webpages/advertisementDetails.js";

const AppRoutes=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Advertisements/>}/>
                <Route exact path="/user/:id" element={<User/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/newadvertisement" element={<CreateAdvertisement/>}/>
                <Route exact path="/advertisements/:id" element={<AdvertisementDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;