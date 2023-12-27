import React, { useState } from 'react';
import axios from 'axios';
import "./createAdvertisementForm.css";


function CreateAdvertisementForm() {
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
        price: '',
        addressLocation: '',
        addressStreet: '',
        addressNumber: '',
        postalCode: '',
        bedrooms: '',
        bathrooms: ' ',
        area: '',
        contactPhoneNumber: '',
        userId: '',
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
        <div className="container-create-add">
            <header className="header">
                <span>Criar Anúncio</span>
            </header>

            <form>
                <div className="inputContainer">
                    <label>
                        Título:
                        <input type="text" name="title" value={postData.title} onChange={handleInputChange} required/>
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Descrição:
                        <input type="text" name="description" value={postData.description} onChange={handleInputChange} required/>
                    </label>
                </div>

                <div className="inputContainer">
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
                </div>

                <div className="inputContainer">
                    <label>
                        Preço:
                        <input type="text" name="price" value={postData.price} onChange={handleInputChange} required/>
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Área:
                        <input type="number" name="area" value={postData.area} onChange={handleInputChange}/>
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Quartos:
                        <input type="number" name="bedrooms" value={postData.bedrooms} onChange={handleInputChange}/>
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Casas de banho:
                        <input type="number" name="bathrooms" value={postData.bathrooms} onChange={handleInputChange}/>
                    </label>
                </div>
 
                <div className="inputContainer">
                    <label>
                       Morada:
                        <input type="text" name="addressStreet" value={postData.addressStreet} onChange={handleInputChange} required/>
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Número:
                        <input type="number" name="addressNumber" value={postData.addressNumber} onChange={handleInputChange}/>
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Código Postal:
                        <input type="number" name="postalCode" value={postData.postalCode} onChange={handleInputChange} required/>
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                       Localização:
                        <input type="text" name="addressLocation" value={postData.addressLocation} onChange={handleInputChange} required/>
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Telemóvel:
                        <input type="text" name="contactPhoneNumber" value={postData.contactPhoneNumber} onChange={handleInputChange} required/>
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Imagem:
                        <input type="text" name="picture" value={postData.picture} onChange={handleInputChange}/>
                    </label>
                </div>
            </form>  
            
            <button onClick={handlePostRequest}>Criar novo anúncio</button>
        </div>
      );
};

export default CreateAdvertisementForm;
