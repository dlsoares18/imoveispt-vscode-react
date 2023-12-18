import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ListOfAdvertising=()=>{
    const [error, setError]=useState(null);
    const [advertisings, setAdvertising]=useState([]);
    const [isloaded, setIsloaded]=useState(false);
    useEffect(()=>{
        fetch("https://localhost:7271/api/Advertisements/")
      .then(response => response.json())
      .then((data)=>{
        setIsloaded(true);
        setAdvertising(data);
      },
      (error)=>{
        setIsloaded(false);
        setError(error);
      }
      );
    },[]);
    if(error){
    return(<div>
        <h1>Lista de Anúncios</h1>
        <ul>
            <li>Erro:{error.message}</li>
        </ul>
    </div>)}
    else if(!isloaded){
        return(
            <div>...Loading...</div>
        )
    }
    else{
        return(
        <div>
            <h1>Lista de Anúncios</h1>
            <ul>{advertisings.map(advertising=>(
                <li key={advertising.id}>
                    <Link to={`advertisiing/${advertising.id}`}>
                    {advertising.title}
                    </Link>
                </li>
            ))}
            </ul>
        </div>
        )
    }
}
export default ListOfAdvertising;