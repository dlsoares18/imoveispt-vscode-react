import React, { useEffect, useState } from "react";
import "./advertisementList.css";
import { Link } from "react-router-dom";
import AdvertisementCard from "../advertisementCard/advertisementCard";


function AdvertisementList() {
    const [advertisements, setAdvertisements] = useState([]);
    const [filters, setFilters] = useState({
        bedrooms: '',
        bathrooms: '',
        propertyType: '',
        location: '',
        minPrice: '',
        maxPrice: ''
    });
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const propertyTypeOptions = [
        'Apartamento',
        'Armazém',
        'Escritório',
        'Estúdio',
        'Garagem',
        'Loja',
        'Moradia',
        'Prédio',
        'Quinta',
        'Terreno',
      ];

    useEffect(() => {
        fetch("https://localhost:7271/api/advertisements/")
            .then(response => response.json())
            .then((data) => {
                setIsLoaded(true);
                setAdvertisements(data);
            },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            );
    }, []);

    async function fetchAdvertisements() {

        let isParamInitialized = false

        let url = 'https://localhost:7271/api/advertisements'

        if (filters.bedrooms !== '' && filters.bedrooms > 0) {
            url += '?bedrooms=' + filters.bedrooms
            isParamInitialized = true
        }

        if (filters.bathrooms !== '' && filters.bathrooms > 0) {
            if (isParamInitialized) {
                url += '&bathrooms=' + filters.bathrooms
            } else {
                url += '?bathrooms=' + filters.bathrooms
            }
            isParamInitialized = true
        }

        if (filters.propertyType !== '' && filters.propertyType >= 0) {
            if (isParamInitialized) {
                url += '&propertyType=' + filters.propertyType
            } else {
                url += '?propertyType=' + filters.propertyType
            }
            isParamInitialized = true
        }

        if (filters.location !== '' && filters.location !== '') {
            if (isParamInitialized) {
                url += '&location=' + filters.location
            } else {
                url += '?location=' + filters.location
            }
            isParamInitialized = true
        }

        if (filters.minPrice !== '' && filters.minPrice > 0) {
            if (isParamInitialized) {
                url += '&minPrice=' + filters.minPrice
            } else {
                url += '?minPrice=' + filters.minPrice
            }
            isParamInitialized = true
        }

        if (filters.maxPrice !== '' && filters.maxPrice > 0) {
            if (isParamInitialized) {
                url += '&maxPrice=' + filters.maxPrice
            } else {
                url += '?maxPrice=' + filters.maxPrice
            }
            isParamInitialized = true
        }


        const response = await fetch(url);
        const data = await response.json();
        setAdvertisements(data);
    }


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
            <div className="container-adds">
                
                <div className="filterContainer">
                    
                    <div className="inputFilterContainer">
                        <label className="inputLabel">
                            Tipo de Propriedade:<br/>
                            <select 
                                value={filters.propertyType} 
                                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                            >
                                <option value="">Escolha uma opção</option>
                                {propertyTypeOptions.map((type, index) => (
                                    <option key={index} value={index + 1}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>               

                    <div className="inputFilterContainer">
                        <label className="inputLabel">
                            Localização:<br/>  
                            <input 
                                type="text" 
                                value={filters.location} 
                                onChange={(e) => setFilters({ ...filters, location: e.target.value })}               
                            />
                        </label> 
                    </div>

                    <div className="inputFilterContainer">
                        <label className="inputLabel">
                            Quartos:<br/>  
                            <input 
                                type="number" 
                                value={filters.bedrooms} 
                                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}                   
                            />
                        </label> 
                    </div>

                    <div className="inputFilterContainer">
                        <label className="inputLabel">
                            Casas de banho:<br/>  
                            <input 
                                type="number" 
                                value={filters.bathrooms} 
                                onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}               
                            />
                        </label> 
                    </div>

                    <div className="inputFilterContainer">
                        <label className="inputLabel">
                            Preço mínimo:<br/>  
                            <input 
                                type="number" 
                                value={filters.minPrice} 
                                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}               
                            />
                        </label> 
                    </div>

                    <div className="inputFilterContainer">
                        <label className="inputLabel">
                            Preço máximo:<br/>  
                            <input 
                                type="number" 
                                value={filters.maxPrice} 
                                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}               
                            />
                        </label> 
                    </div>
                        
                    <button onClick={fetchAdvertisements}>Filtrar</button>
                </div>

            <div className="advertisementsContainer">
                {advertisements.map((advertisement) => (
                    <div key={advertisement.id}>
                    <Link to={`advertisements/${advertisement.id}`} style={{ textDecoration: 'none' }} >
                        <AdvertisementCard advertisement={advertisement} />
                    </Link>
                    </div>
                ))}
            </div>
        </div>
            
        );
    }
}

export default AdvertisementList;