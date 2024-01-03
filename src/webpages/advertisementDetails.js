import Advertisement from "../components/advertisement/advertisement";
import AuthNavBar from "../components/authNavBar/authNavBar";
import PublicNavBar from "../components/publicNavBar/publicNavBar";

function AdvertisementDetails() {

  let authenticated = localStorage.getItem('token');

    return (
      <div>
        {authenticated ? <AuthNavBar/> : <PublicNavBar/>}
        <Advertisement/>
      </div>
    );
  }
  
  export default AdvertisementDetails;