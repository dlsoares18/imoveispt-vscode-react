import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ListOfUser=()=>{
    let {id}=useParams();
    const [error, setError]=useState(null);
    const [users, setUsers]=useState([]);
    const [isloaded, setIsloaded]=useState(false);
    useEffect(()=>{
        fetch("https://localhost:7271/api/ApplicationUsers/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setIsloaded(true);
            setUsers(data);
        },
        (error)=>{
            setIsloaded(false);
            setError(error);
        });
    },[id]
    );
    if(error){
    return(<div>
        <h1>Utilizador</h1>
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
            <div>
                <h1>Detalhes do utilizador</h1>
                <p>Nome: {users.userName}</p>
                <p>Email: {users.email}</p>
                <p>Morada: {users.advertisements}</p>
                <p>Cidade: {users.favorites}</p>
                <a href="../">Voltar</a>
            </div>
        )
    }
}
export default ListOfUser;