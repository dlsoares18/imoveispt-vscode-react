import React from "react";
import "./authNavBar.css";
import logo from '../../assets/logoImoveisPT.png';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';


const AuthNavBar = () => {

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userName = decodedToken.firstName;

    const navigate = useNavigate();

    const handleLogout = async () => {
       
        localStorage.removeItem('token'); 
        navigate('/');                          
        window.location.reload();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="img">
                    <a href="/">
                        <img src={logo} height={50} width={150}/>
                    </a>
                </div>
                <div>
                    <div id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <button className="nav-button">
                                    <a href="/">
                                        <span className="icon icon-home"></span>
                                        Home
                                    </a>
                                </button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-button">
                                    <a href="/newadvertisement">
                                        <span className="icon icon-newad"></span>
                                        Criar anúncio
                                    </a>
                                </button>
                            </li>

                            <li className="nav-item">                            
                                <button className="nav-button" >
                                    <a href="myadvertisements">
                                        <span className="icon icon-myads"></span>
                                        Meus anúncios
                                    </a>
                                </button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-button user-button">
                                    <span className="icon icon-user"></span>
                                    {userName ? userName : 'Utilizador'}
                                </button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-button logout-button" onClick={handleLogout}>
                                    <span className="icon icon-logout"></span>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>        
    );
}

export default AuthNavBar;