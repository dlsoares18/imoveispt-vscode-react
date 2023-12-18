import React, { useEffect, useState } from "react";
const Facto=()=>{

    const [error, setError]=useState(null);
    const [facto, setFacto]=useState([]);
    const [isloaded, setIsloaded]=useState(false);
    useEffect(()=>{
        fetch("https://localhost:7271/api/ApplicationUsers/")
        .then(res=>res.json())
        .then((data)=>{
            setIsloaded(true);
            setFacto(data);
        },
        (error)=>{
            setIsloaded(false);
            setError(error);
        });
    },[]
    );
    if(error){
    return(<div>
        <h1>Facto</h1>
        <ul>
            <li>Erro:{error.message}</li>
        </ul>
    </div>)
    }
    else if(!isloaded)
    {
        return(
            <div>... Loading ...</div>
        )
    }
    else{
        return(
         
                <p>{facto.fact}</p>
             
        )
    }
}
export default Facto