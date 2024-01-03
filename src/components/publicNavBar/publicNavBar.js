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
                                <button className="nav-button">
                                    <a href="/">
                                        <span className="icon icon-home"></span>
                                        Home
                                    </a>
                                </button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-button">
                                    <a href="/register">
                                        <span className="icon icon-newaccount"></span>
                                        Criar conta
                                    </a>
                                </button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-button login-button">
                                    <a href="/login">
                                        <span className="icon icon-login"></span>
                                        Login
                                    </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>        
    );
}

export default PublicNavBar;