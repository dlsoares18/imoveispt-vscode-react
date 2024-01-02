import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultImage from "../../assets/house.png";
//import "./advertisement.css";

function GoogleMap({postalCode, addressStreet, addressNumber, addressLocation}) {
  
  useEffect(() => {
    const fetchLocation = async () => {
      const address = `${addressNumber} ${addressStreet}, ${postalCode}`;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_API_KEY`;
 
      try {
        const response = await fetch(url);
        const data = await response.json();
        const location = data.results[0].geometry.location;
 
        // Agora você tem as coordenadas da localização e pode usá-las para exibir o mapa do Google Maps
      } catch (error) {
        console.error('Error:', error);
      }
    };
 
    fetchLocation();
  }, [postalCode, addressNumber, addressStreet]);
 
  return (
    <div id="google-map"></div>
  );
}

export default GoogleMap;