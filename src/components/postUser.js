import React, { useState } from 'react';
import axios from 'axios';

const PostUser = () => {
  const [postData, setPostData] = useState({
    userName: '',
    email: '',
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
      const response = await axios.post('https://localhost:7271/api/ApplicationUsers/', postData);
      console.log('Resposta da API:', response.data);
      setResponseMessage(`Resposta da API: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error('Erro ao fazer a solicitação POST:', error);
      // Adicione lógica para lidar com o erro, se necessário
    }
  };

  return (
    <div>
      <h2>Postagem na API</h2>
      <form>
        <label>
          Nome de Usuário:
          <input type="text" name="userName" value={postData.userName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={postData.email} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handlePostRequest}>
          Enviar Postagem
        </button>
      </form>
    </div>
  );
};

export default PostUser;
