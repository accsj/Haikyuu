import React from 'react';
import AuthHeader from '../../components/Header/HeaderAuth/AuthHeader';
import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import '../../assets/styles/Auth.css';



export default function RecoveryPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleClickRecovery = async (event) => {
        event.preventDefault();

        try {
            const response = await Axios.post("https://haikyuu-server.onrender.com/recovery", {
                email
            });
            
            if (response.status === 200) {
                toast.success('Email de recuperação enviado!', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                document.cookie = `token=${response.data.token}; path=/`;
                navigate("/");
            } else {
                setErrorMessage(response.data.message || 'Erro ao recuperar email.');
            }
        }
        catch (error) {
            toast.error('Email não encontrado', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }


    return (
        <>
            <AuthHeader />
            <main className="box">
            <div className="loginregister-box">
                <a href="/">
                <i className="bx bx-chevron-left"></i>
                </a>
                <h1>Recovery</h1>
                <form method="post" onSubmit={handleClickRecovery}>
                <div className="input-box">
                    <input type="text" name="email" placeholder="Digite o seu Email" required onChange={(e) => setEmail(e.target.value)}/>
                    <i className="bx bxs-envelope"></i>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit" className="btn-login2">
                    <i className="bx bx-right-arrow-alt"></i>
                </button>
                </form>
            </div>
            </main>
        </>
    );
}

