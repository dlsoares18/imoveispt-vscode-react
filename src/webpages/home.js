import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home=()=>{
    const [error, setError]=useState(null);
    const [users, setUsers]=useState([]);
    const [isloaded, setIsloaded]=useState(false);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((data)=>{
        setIsloaded(true);
        setUsers(data);
      },
      (error)=>{
        setIsloaded(false);
        setError(error);
      }
      );
    },[]);
    if(error){
    return(<div>
        <h1>Lista de Utilizadores</h1>
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
            <h1>Lista de Utilizadores</h1>
            <ul>{users.map(user=>(
                <li key={user.id}>
                    <Link to={`user/${user.id}`}>
                    {user.name}
                    </Link>
                </li>
            ))}
               
            </ul>
        </div>
        )
    }
}
export default Home;
