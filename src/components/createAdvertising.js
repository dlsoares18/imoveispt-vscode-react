import React, { useState } from 'react';
import axios from 'axios';

const CreateAdvertising = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://localhost:7271/api/ApplicationUsers', {
        userName: userName,
        email: email
      });
      // Atualize a lista de itens após a criação bem-sucedida
    } catch (error) {
      console.error('Erro ao criar', error);
    }
  };

  return (
    <div>
      <h2>Criar Usuário:</h2>
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

export default CreateAdvertising;