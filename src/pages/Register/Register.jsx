import React from 'react';
import AuthHeader from "../../components/Header/HeaderAuth/AuthHeader"
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/Auth.css';



export default function RegisterPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClickRegister = async (event) => {
        event.preventDefault(); 
        
        if (login.length < 5) {
            toast.info('O login deve ter no mínimo 5 caracteres.', {
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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.info('Por favor, insira um email válido.', {
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
        if (password.length < 8) {
            toast.info('A senha deve ter no mínimo 8 caracteres.', {
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
            toast.info('As senhas não coincidem.', {
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
            const response = await Axios.post("https://haikyuu-server.onrender.com/register", {
                login,
                email,
                password
            });
            if (response.data.success) {
                toast.success('Usuário cadastrado com sucesso', {
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
                toast.error('Erro ao realizar o cadastro', {
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
        } catch (error) {
            toast.info('Ocorreu um erro, tente novamente mais tarde', {
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
    };

    return (
        <>
            <AuthHeader />
            <main className="box">
            <div className="loginregister-box">
                <a href="/">
                <i className="bx bx-chevron-left"></i>
                </a>
                <a href="/register">
                <h1>Registro</h1>
                </a>
                <form id='registerform' className='registerform' method="post" onSubmit={handleClickRegister}>
                <div className="input-box">
                    <input type="text" name="login" placeholder="Username" required onChange={(e) => setLogin(e.target.value)}/>
                    <i className="bx bxs-user"></i>
                </div>
                <div className="input-box">
                    <input type="text" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                    <i className="bx bxs-envelope"></i>
                </div>
                <div className="input-box">
                    <input type="password" name="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)}/>
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <div className="input-box">
                    <input type="password" name="confirmPassword" placeholder="Confirme sua senha" required onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <button type="submit" className="btn-login">Criar conta</button>
                </form>
            </div>
            </main>
        </>
    );
}

