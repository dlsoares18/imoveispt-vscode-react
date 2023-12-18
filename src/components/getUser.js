import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const GetUser=()=>{
    const [error, setError]=useState(null);
    const [users, setUser]=useState([]);
    const [isloaded, setIsloaded]=useState(false);
    useEffect(()=>{
        fetch("https://localhost:7271/api/ApplicationUsers/")
      .then(response => response.json())
      .then((data)=>{
        setIsloaded(true);
        setUser(data);
      },
      (error)=>{
        setIsloaded(false);
        setError(error);
      }
      );
    },[]);
    if(error){
    return(<div>
        <h1>Lista de Usuários</h1>
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
            <h1>Lista de Usuários</h1>
            <ul>{users.map(user=>(
                <li key={user.id}>
                    <Link to={`user/${user.id}`}>
                    {user.userName}
                    </Link>
                </li>
            ))}
            </ul>
        </div>
        )
    }
}
export default GetUser;