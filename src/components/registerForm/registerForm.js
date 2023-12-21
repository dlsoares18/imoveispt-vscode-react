import React, { useState } from 'react';
import axios from 'axios';
import "./registerForm.css";


function RegisterForm() {

   const [postData, setPostData] = useState({
       userName: '',
       email: '',
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
         const response = await axios.post('https://localhost:7271/api/Authenticate/register', postData);
         console.log('Resposta da API:', response.data);
       } catch (error) {
         console.error('Erro ao fazer a solicitação POST:', error);
         // Adicione lógica para lidar com o erro, se necessário
       }
   };
   
   return (
       <div className="container">
         <header className="header">
            <span>Cadastro de Conta</span>
         </header>

         <form>
            <div className="inputContainer">
                <label htmlFor="userName">Nome</label>                
                <input 
                    type="text" 
                    name="userName" 
                    id="userName"
                    value={postData.userName} 
                    onChange={handleInputChange}

                    required 
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="email">Email</label>                
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={postData.email} 
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
                Cadastrar
            </button>            
         </form>

       </div>
     );
   };

/*    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

   return (
       <form onSubmit={handleSubmit}>
           <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Nome" required />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Apelido" required />
           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
           <button type="submit">Cadastrar</button>
       </form>
   );
}*/

export default RegisterForm;
