import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./updateAdvertisementForm.css";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function UpdateAdvertisementForm() {

    let {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [advertisement, setAdvertisement] = useState([]);

    const [putData, setPutData] = useState({
        title: '',
        description: '',
        price: '',
        addressLocation: '',
        addressStreet: '',
        addressNumber: '',
        postalCode: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        contactPhoneNumber: '',
        propertyType: '',
        status: '',
        picture: '',
     });

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

    const statusOptions = [
        'Disponível',
        'Reservado',
        'Vendido',
    ];

    const location = useLocation();
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);


    // Pegar os dados atuais do anúncio:
    useEffect(() => {
    fetch("https://localhost:7271/api/advertisements/"+ id)
      .then(response => response.json())
      .then((data) => {
          setIsLoaded(true);
          setAdvertisement(data);
      },
          (error) => {
            setIsLoaded(false);
            setError(error);
          }
      );
    }, []);
    
    // preencher o formulário com os dados(atuais) do anúncio, caso o fetch tenha funcionado.     
     useEffect(() => {
        if (isLoaded) {
            setPutData({
                title: advertisement.title,
                description: advertisement.description,
                price: advertisement.price,
                addressLocation: advertisement.addressLocation,
                addressStreet: advertisement.addressStreet,
                addressNumber: advertisement.addressNumber,
                postalCode: advertisement.postalCode,
                bedrooms: advertisement.bedrooms,
                bathrooms: advertisement.bathrooms,
                area: advertisement.area,
                contactPhoneNumber: advertisement.contactPhoneNumber,
                propertyType: advertisement.propertyType,
                status: advertisement.status,
                picture: advertisement.picture,
            });
        }
     }, [isLoaded]);

  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPutData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Toast 
    useEffect(() => {
        if (location.state && location.state.showToast) {
            setShowToast(true);
        }
    }, [location]);

    // Toast
    useEffect(() => {
        if (showToast) {
            toast.error("Update failed. Please try again.");
            setShowToast(false);
        }
    }, [showToast]);

    // Enviar os novos dados(do formulário). Atualizar no banco de dados.
    const handlePutRequest = async () => {
        try {
            const token = localStorage.getItem('token');
            
            putData.propertyType = Number(putData.propertyType)
            putData.status = Number(putData.status)

            const response = await axios.put("https://localhost:7271/api/advertisements/"+id, putData, {
                headers: {
                Authorization: `Bearer ${token}`
                }});

            if (response.status === 204) {
                navigate('/myadvertisements');
            }          

        } catch (error) {
            console.error('Erro ao fazer a solicitação PUT:', error);
            navigate('/updateadvertisement/' + id, { state: { showToast: true } });
        }
    };

    return (
        <div className="container-update-add">
            <header className="header">
                <span>Editar Anúncio</span>
            </header>

            <form>
                <div className="inputContainer">
                    <label>
                        Título:
                        <input type="text" name="title" value={putData.title} onChange={handleInputChange} required />
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Descrição:
                        <input type="text" name="description" value={putData.description} onChange={handleInputChange} required />
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Tipo de Propriedade:
                        <select name="propertyType" value={putData.propertyType} onChange={handleInputChange}>
                            <option value="">Selecione o tipo de propriedade</option>
                            {propertyTypeOptions.map((type, index) => (
                                <option key={index} value={index + 1}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Status:
                        <select name="status" value={putData.status} onChange={handleInputChange}>
                            <option value="">Selecione o status</option>
                            {statusOptions.map((type, index) => (
                                <option key={index} value={index}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Preço:
                        <input type="number" name="price" value={putData.price} onChange={handleInputChange} required />
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Área:
                        <input type="number" name="area" value={putData.area} onChange={handleInputChange} />
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Quartos:
                        <input type="number" name="bedrooms" value={putData.bedrooms} onChange={handleInputChange} />
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Casas de banho:
                        <input type="number" name="bathrooms" value={putData.bathrooms} onChange={handleInputChange} />
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Morada:
                        <input type="text" name="addressStreet" value={putData.addressStreet} onChange={handleInputChange} required />
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Número:
                        <input type="number" name="addressNumber" value={putData.addressNumber} onChange={handleInputChange} />
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Código Postal:
                        <input type="text" name="postalCode" value={putData.postalCode} onChange={handleInputChange} required />
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Localização:
                        <input type="text" name="addressLocation" value={putData.addressLocation} onChange={handleInputChange} required />
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Telemóvel:
                        <input type="text" name="contactPhoneNumber" value={putData.contactPhoneNumber} onChange={handleInputChange} required />
                    </label>
                </div>

                <div className="inputContainer">
                    <label>
                        Imagem:
                        <input type="text" name="picture" value={putData.picture} onChange={handleInputChange} />
                    </label>
                </div>
            </form>

            <button className="update-ad-button" onClick={handlePutRequest}>Guardar alterações</button>
            <ToastContainer /> 
        </div>
    );
};

export default UpdateAdvertisementForm;
