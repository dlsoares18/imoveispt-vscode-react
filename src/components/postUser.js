import React, { useState } from 'react';
import axios from 'axios';

const PostUser = () => {
 // State variables for form fields
 const [userName, setUserName] = useState('');
 const [email, setEmail] = useState('');

 // Function to handle form submission
 const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     // Make a POST request to the API endpoint
     await axios.post('https://localhost:7271/api/ApplicationUsers', {
       userName: userName,
       email: email
     });
     // Clear the form fields
     setUserName('');
     setEmail('');
   } catch (error) {
     // Log any errors
     console.error('Erro ao criar', error);
   }
 };

 return (
   <div>
     <h1>Criar Usuário:</h1>
     <form onSubmit={handleSubmit}>
       <label>
         Nome:
         <input
           type="text"
           value={userName}
           onChange={(e) => setUserName(e.target.value)}
         />
       </label>
       <label>
         Email:
         <input
           type="text"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
       </label>
       <button type="submit">Criar</button>
     </form>
   </div>
 );
};

export default PostUser;
