import AuthNavBar from "../components/authNavBar/authNavBar";
import UpdateAdvertisementForm from "../components/updateAdvertisementForm/updateAdvertisementForm";
import { useParams } from "react-router-dom";


function UpdateAdvertisement() {
    return (
      <div>
        <AuthNavBar/>
        <UpdateAdvertisementForm/>

      </div>
    );
  }
  
  export default UpdateAdvertisement;