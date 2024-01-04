import React, { useEffect } from "react";


function GoogleMap({advertisement}) {
 
 const advertisementDetails = advertisement;

 useEffect(() => {
   const script = document.createElement("script");
   script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAA6cnDKrv64Oc0vFUJe_xeBqScoPw9dNw`;
   script.async = true;
   script.defer = true;
   document.head.appendChild(script);
  
   script.addEventListener("load", () => {
     if (window.google && window.google.maps && window.google.maps.Map) {
       initializeMap();
     }
   });
  
   return () => {
     document.head.removeChild(script);
   };
  }, []);
  
  const initializeMap = () => {
   if (
     window.google &&
     window.google.maps &&
     window.google.maps.Geocoder &&
     advertisementDetails.addressStreet &&
     advertisementDetails.addressNumber &&
     advertisementDetails.addressLocation &&
     advertisementDetails.postalCode
   ) {
     const geocoder = new window.google.maps.Geocoder();
     const address = `${advertisementDetails.addressStreet}, ${advertisementDetails.addressNumber}, ${advertisementDetails.addressLocation}, ${advertisementDetails.postalCode}`;
  
     geocoder.geocode({ 'address': address }, (results, status) => {
       if (status === 'OK') {
         const map = new window.google.maps.Map(document.getElementById("map"), {
           center: results[0].geometry.location,
           zoom: 15,
         });
  
         new window.google.maps.Marker({
           position: results[0].geometry.location,
           map: map,
           title: "Localização do Anúncio",
         });
       } else {
         alert('Geocode was not successful for the following reason: ' + status);
       }
     });
   }
  };

  return (
    <div id="map" style={{ height: "400px", width: "100%" }}></div>
  );
}

export default GoogleMap;