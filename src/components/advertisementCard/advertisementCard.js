import defaultImage from "../../assets/house.png";
import "./advertisementCard.css";

function AdvertisementCard({ advertisement }) {
    return (
      <div className="card">
        <img src={advertisement.picture || defaultImage} alt="Anúncio" className="card-img"/>
        <div className="card-body">
          <h2 className="card-title">{advertisement.title}</h2>
          <p className="card-text"><strong>Localização:</strong> {advertisement.addressLocation}</p>
          {/* <div className="details">  */}
            <p className="card-text"><strong>Área:</strong> {advertisement.area}</p>
            <p className="card-text"><strong>Quartos:</strong> {advertisement.bedrooms}</p>
            <p className="card-text"><strong>Banheiros:</strong> {advertisement.bathrooms}</p>
          {/* </div> */}

          <p className="card-text"><strong>Preço:</strong> {advertisement.price}</p>
          <p className="card-text"><strong>Status:</strong> {advertisement.status}</p>
        </div>
      </div>
    );
   }

   export default AdvertisementCard;


{/*}
   <div className="advertisementsContainer">
   {advertisements.map((advertisement) => (
       <div key={advertisement.id}>
           <Link to={`advertisement/${advertisement.id}`}>
               <img src={advertisement.picture ||defaultImage} width="150" height="150"/><br/>
               {advertisement.title}<br/>
               {advertisement.addressLocation} <br/>
               {advertisement.area} <br/>
               {advertisement.bedrooms} <br/>
               {advertisement.bathrooms} <br/>
               {advertisement.price} <br/>
               {advertisement.status} <br/>
           </Link>
           <br/>
           console.log({advertisement.picture});
       </div>
   ))}
   </div>*/}