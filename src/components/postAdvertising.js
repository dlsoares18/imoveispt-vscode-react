import React, { useState } from 'react';
import axios from 'axios';

const PostAdvertising = () => {
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

  const [postData, setPostData] = useState({
    title: '',
    description: '',
    price: 0.0,
    addressLocation: '',
    addressStreet: '',
    addressNumber: 0,
    postalCode: '',
    bedrooms: 0,
    bathrooms: 0,
    area: 0.0,
    contactPhoneNumber: '',
    userId: 0,
    propertyType: '',
    picture: '',
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
      const response = await axios.post('https://localhost:7271/api/Advertisements/', postData);
      console.log('Resposta da API:', response.data);

    } catch (error) {
      console.error('Erro ao fazer a solicitação POST:', error);
    }
  };

  return (
    <div>
      <h1>Criar anúncio</h1>
      <form>
        <label>
          Título:
          <input type="text" name="title" value={postData.title} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Descrição:
          <input type="text" name="description" value={postData.description} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Preço:
          <input type="number" name="price" value={postData.price} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Localidade:
          <input type="text" name="addressLocation" value={postData.addressLocation} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Morada:
          <input type="text" name="addressStreet" value={postData.addressStreet} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Numero da porta:
          <input type="number" name="addressNumber" value={postData.addressNumber} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Código postal:
          <input type="text" name="postalCode" value={postData.postalCode} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Quartos:
          <input type="number" name="bedrooms" value={postData.bedrooms} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Casa de banho:
          <input type="number" name="bathrooms" value={postData.bathrooms} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Área:
          <input type="number" name="area" value={postData.area} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Telemóvel:
          <input type="text" name="contactPhoneNumber" value={postData.contactPhoneNumber} onChange={handleInputChange} />
        </label>
        <br />
        <label>
        Tipo de Propriedade:
          <select name="propertyType" value={postData.propertyType} onChange={handleInputChange}>
            <option value="">Selecione o tipo de propriedade</option>
            {propertyTypeOptions.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Imagem:
          <input type="url" name="picture" value={postData.picture} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handlePostRequest}>
          Criar
        </button>
      </form>
    </div>
  );
};

export default PostAdvertising;