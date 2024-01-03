import AdvertisementList from "../components/advertisementList/advertisementList";
import AuthNavBar from "../components/authNavBar/authNavBar";
import PublicNavBar from "../components/publicNavBar/publicNavBar";

function Advertisements() {

let authenticated = localStorage.getItem('token');

  return (
      <div>
         {authenticated ? <AuthNavBar/> : <PublicNavBar/>}
        <AdvertisementList/>
      </div>
    );
  }
  
  export default Advertisements;