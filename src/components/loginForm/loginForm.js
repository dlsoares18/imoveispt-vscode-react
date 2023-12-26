import React, { useState } from 'react';
import axios from 'axios';
import "./loginForm.css";


function LoginForm() {

   const [postData, setPostData] = useState({
        username: '',
        password: '',
     });
   
   const handleInputChange = (e) => {
       const { name, value } = e.target;
       setPostData((prevData) => ({
         ...prevData,
         [name]: value,
       }));
   };
   
   const handlePostRequest = async () => {
       try {
         const response = await axios.post('https://localhost:7271/api/Authenticate/login', postData);
         console.log('Resposta da API:', response.data);
       } catch (error) {
         console.error('Erro ao fazer a solicitação POST:', error);
         // Adicione lógica para lidar com o erro, se necessário
       }
   };
   
   return (
       <div className="container">
            <header className="header">
                <span>Entre na sua Conta</span>
            </header>

            <form>       
                <div className="inputContainer">
                    <label htmlFor="email">Email</label>                
                    <input 
                        type="email" 
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

            <div className='footer'>
                <p>Não tem uma conta? <a href='/register'>Cadastre-se</a> </p>
            </div>
       </div>
     );
   };


export default LoginForm;
