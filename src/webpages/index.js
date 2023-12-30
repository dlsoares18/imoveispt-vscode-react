import AdvertisementList from "../components/advertisementList/advertisementList";
import LoginForm from "../components/loginForm/loginForm";
import PublicNavBar from "../components/publicNavBar/publicNavBar";

function Advertisements() {
    return (
      <div>
        {/* Colocar aqui o elemento barra de navegação que irei criar para anônimos contendo apenas o
        logo de imóveis pt e um ícone de user e o link entrar*/}
        <PublicNavBar/>
        <AdvertisementList/>
      </div>
    );
  }
  
  export default Advertisements;