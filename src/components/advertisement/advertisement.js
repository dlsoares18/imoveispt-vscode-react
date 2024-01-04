import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultImage from "../../assets/house.png";
import "./advertisement.css";
import GoogleMap from "../googleMap/googleMap";

function Advertisement() {
  
  let {id}=useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [advertisementDetails, setAdvertisementDetails] = useState([]);

  useEffect(() => {
  fetch("https://localhost:7271/api/advertisements/"+ id)
    .then(response => response.json())
    .then((data) => {
        setIsLoaded(true);
        setAdvertisementDetails(data);
    },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
    );
  }, [id]);

  if (error) {
    return (<div>
        <p>Erro:{error.message}</p>
    </div>)
  }

  else if (!isLoaded) {
      return (
          <div>...Loading...</div>
      )
  }

  else {
    return (
      <div >
          <div className="container-add-detail">
              
              <div className="row">
                <h1>{advertisementDetails.title}</h1>
              </div>

              <div className="row">
                <div className="column left">
                  <h2>{advertisementDetails.addressLocation}</h2>
                </div>
                <div className="column right">
                  <h2 className="purple">{new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(advertisementDetails.price)}</h2>
                </div>    
              </div>

              <div className="row">
                <div className="column left">
                  <h2 >{advertisementDetails.status}</h2>
                </div>
                <div className="column right">
                    {(() => {
                      let date = new Date(advertisementDetails.createdAt);
                      return ("Publicado em: " + (date.getDate())) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();
                    })()}
                </div>
              </div>

              <div className="row">
                <img src={advertisementDetails.picture || defaultImage} alt="Anúncio" className="card-img"/>
              </div>

              <div className="row block">
                <h2>Descrição</h2>
                <p>{advertisementDetails.description}</p>
              </div>

              <div className="row block">
                <h2>Tipo de Propriedade</h2>
                <p>{advertisementDetails.propertyType}</p>
              </div>

              <div className="row block">
                <h2>Detalhes do imóvel</h2>
                <p> 
                  <span className="icon icon-area">
                    &nbsp; 
                    Área: 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  </span>
                  {parseFloat(advertisementDetails.area).toLocaleString(undefined, { maximumFractionDigits: 2 }) + " m²"}
                </p>
                <p> 
                  <span className="icon icon-bed">
                    &nbsp;
                    Quartos: 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  {advertisementDetails.bedrooms}
                </p>
                <p> 
                  <span className="icon icon-bath">
                    &nbsp;
                    Casas de banho: 
                    &nbsp;&nbsp;&nbsp;&nbsp; 
                  </span>
                  {advertisementDetails.bathrooms}
                </p>
              </div>              

              <div className="row block">
                <h2>Contacto</h2>
                <p>
                  <span className="icon icon-phone">
                    &nbsp;                      
                    {advertisementDetails.contactPhoneNumber}                  
                  </span>
                  </p>
              </div>

              <div className="row block">
                <h2>Morada</h2>
                <p>
                  {advertisementDetails.addressStreet}, &nbsp;
                  {advertisementDetails.addressNumber}, &nbsp;
                  {advertisementDetails.addressLocation}, &nbsp;
                  {advertisementDetails.postalCode}</p>
              </div>

              <div className="row block">
                <h2>Mapa</h2>
              </div>

              <div className="row row-map">
                <GoogleMap advertisement={advertisementDetails} />
              </div>
          </div>
      </div>
    );
  }
}

export default Advertisement;