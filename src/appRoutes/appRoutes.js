import {BrowserRouter,Route,Routes} from "react-router-dom";
import Register from "../webpages/register.js";
import Login from "../webpages/login.js";
import Advertisements from "../webpages/index.js";
import CreateAdvertisement from "../webpages/createAdvertisement.js";
import AdvertisementDetails from "../webpages/advertisementDetails.js";
import MyAdvertisements from "../webpages/myAdvertisements.js";
import UpdateAdvertisement from "../webpages/updateAdvertisement.js";
import { ProtectedRoute } from "./protectedRoute.js";


const AppRoutes=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Advertisements/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/newadvertisement" element={<ProtectedRoute><CreateAdvertisement/></ProtectedRoute>}/>
                <Route exact path="/advertisements/:id" element={<AdvertisementDetails/>}/>
                <Route exact path="/myadvertisements" element={<ProtectedRoute><MyAdvertisements/></ProtectedRoute>}/>
                <Route exact path="/updateadvertisement/:id" element={<ProtectedRoute><UpdateAdvertisement/></ProtectedRoute>}/>

            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;