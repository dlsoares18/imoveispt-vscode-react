import Advertisement from "../components/advertisement/advertisement";
import PublicNavBar from "../components/publicNavBar/publicNavBar";

function AdvertisementDetails() {
    return (
      <div>
        {/* Colocar aqui o elemento barra de navegação que irei criar para anônimos contendo apenas o
        logo de imóveis pt e um ícone de user e o link entrar*/}
        <PublicNavBar></PublicNavBar>
        <Advertisement/>
      </div>
    );
  }
  
  export default AdvertisementDetails;