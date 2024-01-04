import React, { useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';
import "./myAdvertisementList.css";
import { Link } from "react-router-dom";
import MyAdvertisementCard from "../myAdvertisementCard/myAdvertisementCard";


function MyAdvertisementList() {

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;

    const [advertisements, setAdvertisements] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://localhost:7271/api/ApplicationUsers/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then((data) => {
                setIsLoaded(true);
                setAdvertisements(data.advertisements);
                console.log(data.advertisements); 
            },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return (<div>
            <p>Erro:{error.message}</p>
        </div>)
    }
    else if (!isLoaded) {
        return (
            <div>...Loading...</div>
        )
    }
    else {
        return (
            <div className="container-myadds">                
                <div className="filterContainer">               
                    <div className="advertisementsContainer">
                        {advertisements.map((advertisement) => (
                            <div key={advertisement.id}>
                            <Link to={`/advertisements/${advertisement.id}`} style={{ textDecoration: 'none' }} >
                                <MyAdvertisementCard advertisement={advertisement} />
                            </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

}

export default MyAdvertisementList;