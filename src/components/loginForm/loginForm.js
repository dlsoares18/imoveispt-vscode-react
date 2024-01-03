import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./loginForm.css";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function LoginForm() {

    const [postData, setPostData] = useState({
        username: '',
        password: '',
    });

    const location = useLocation();
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (location.state && location.state.showToast) {
            setShowToast(true);
        }
    }, [location]);

    useEffect(() => {
        if (showToast) {
            toast.error("Login failed. Please try again.");
            setShowToast(false);
        }
    }, [showToast]);

    const handlePostRequest = async () => {
        try {
            const response = await axios.post('https://localhost:7271/api/Authenticate/login', postData);
            console.log('Resposta da API:', response.data);

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            }

        } catch (error) {
            console.error('Erro ao fazer a solicitação POST:', error);
            navigate('/login', { state: { showToast: true } });
        }
    };

    return (

        <div className="container-login">
            <header className="header">
                <span>Entre na sua Conta</span>
            </header>

            <form>
                <div className="inputContainer">
                    <label htmlFor="text">Email</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={postData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={postData.password}
                        onChange={handleInputChange}
                        /*pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,}$"*/
                        title="A senha deve ter pelo menos 6 caracteres, pelo menos um caracter não alfanumérico, pelo menos um caractere numérico, pelo menos um caracter em maiúsculas e pelo menos um caracter em minúsculas"
                        required
                    />
                </div>

                <button type="button" onClick={handlePostRequest}>
                    Entrar
                </button>
            </form>

            <ToastContainer />

            <div className='footer'>
                <p>Não tem uma conta? <a href='/register'>Cadastre-se</a> </p>
            </div>
        </div>
    );
};


export default LoginForm;
