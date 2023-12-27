import defaultImage from "../../assets/house.png";
import "./advertisementCard.css";

function AdvertisementCard({ advertisement }) {
    return (
      <div className="card">
        <img src={advertisement.picture || defaultImage} alt="Anúncio" className="card-img"/>
        <div className="card-body">
          <h2 className="card-title">{advertisement.title}</h2>
          <p className="card-text"><strong>Localização:</strong> {advertisement.addressLocation}</p>
          <p className="card-text"><strong>Área:</strong> {advertisement.area}</p>
          <p className="card-text"><strong>Quartos:</strong> {advertisement.bedrooms}</p>
          <p className="card-text"><strong>Casas de banho:</strong> {advertisement.bathrooms}</p>
          <p className="card-text"><strong>Preço:</strong> {advertisement.price}</p>
          <p className="card-text"><strong>Status:</strong> {advertisement.status}</p>
          <button id="favorites">Adicionar aos favoritos</button>
        </div>
      </div>
    );
   }

   export default AdvertisementCard;
