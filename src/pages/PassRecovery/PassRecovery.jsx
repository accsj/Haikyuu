import React from 'react';
import AuthHeader from "../../components/Header/HeaderAuth/AuthHeader";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from 'axios';
import '../../assets/styles/Auth.css';




export default function PassRecovery() {

    const { token } = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleClickPassRecovery = async (event) => {
        event.preventDefault();

        if (password.length < 8) {
            toast.info('O senha deve conter no mínimo 8 caracteres.', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return;
        }

        if (password !== confirmPassword) {
            toast.info('As senhas não coincidem', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return;
        }
        try {
            const response = await Axios.post('https://haikyuu-server.onrender.com/password-recovery', {
                password,
                token: token
            })
            if (response.data.success) {
                toast.success('Senha redefinida com sucesso', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate("/login");
            } else {
                setErrorMessage(response.data.message || 'Erro ao registrar.');
            }
        }
        catch (error) {
            toast.error('Ocorreu um erro', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
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
                <div>
                    <h1>Redefina a sua senha</h1>
                </div>
                <form id='passrecoveryform' className='passrecoveryform' method="post" onSubmit={handleClickPassRecovery}>
                <div className="input-box">
                    <input type="password" name="newPassword" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)}/>
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <div className="input-box">
                    <input type="password" name="confirmPassword" placeholder="Confirme sua senha" required onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <i className="bx bxs-lock-alt"></i>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit" className="btn-login">Redefinir</button>
                </form>
            </div>
            </main>
        </>
    )
}