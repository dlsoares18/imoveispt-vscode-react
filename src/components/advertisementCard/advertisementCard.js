import { Container } from "react-bootstrap";
import defaultImage from "../../assets/house.png";
import "./advertisementCard.css";

function AdvertisementCard({ advertisement }) {
    return (
      <div className="card">
        <section className="cont">
          <img src={advertisement.picture || defaultImage} alt="Anúncio" className="card-img"/>
        </section>
        
        <div className="card-body">

          <h2 className="card-title">{advertisement.title}</h2>

          <p className="card-text" id="location"> {advertisement.addressLocation}</p>

          <p className="card-text">
            <span className="icon icon-area"> &nbsp;</span>
            {parseFloat(advertisement.area).toLocaleString(undefined, { maximumFractionDigits: 2 }) + " m²"}
          </p>

          <p className="card-text">
            <span className="icon icon-bed"> &nbsp;</span> 
            {advertisement.bedrooms}
          </p>

          <p className="card-text">
            <span className="icon icon-bath"> &nbsp;</span> 
            {advertisement.bathrooms}
          </p>

          <p className="card-text" id="price">{new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(advertisement.price)}</p>

          <p className="card-text" id="status"> {advertisement.status}</p>
        </div>
      </div>
    );
   }

   export default AdvertisementCard;
