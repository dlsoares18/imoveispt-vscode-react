import React from "react";
import "./publicNavBar.css";
import logo from '../../assets/logoImoveisPT.png';

const PublicNavBar = () => {
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
                                <a className="nav-link active" href="/">
                                    Início
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">
                                    Criar conta
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    Entrar
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>        
    );
}

export default PublicNavBar;