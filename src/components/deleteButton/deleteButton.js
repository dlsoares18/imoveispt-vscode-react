import "./deleteButton.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

function DeleteButton({id}) {

    const location = useLocation();
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    
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


    const handleDeleteRequest = async () => {
        try {

            const token = localStorage.getItem('token');

            const response = await axios.delete(`https://localhost:7271/api/advertisements/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }});
            
            if (response.status === 204) {
                navigate('/myadvertisements'); 
            }

        } catch (error) {
            console.error("Erro ao fazer solicitação Delete", error);
            navigate('/myadvertisements', { state: { showToast: true } });
        }
     };

    return (
        <button className="delete-button" onClick={() => handleDeleteRequest()}>
            <span className="icon-delete"></span>    
            <ToastContainer /> 
        </button>
    );
  }
  
export default DeleteButton;

