import React from 'react';
import '../../assets/styles/loginregister.css';
import AuthHeader from '../../components/Header/HeaderAuth/AuthHeader';
import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function LoginPage() {

    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleClickLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await Axios.post("http:/localhost:5000/login", {
                login,
                password
            });

            if (response.data.success) {
                toast.success('Login realizado com sucesso!', {
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
                setErrorMessage(response.data.error || 'Erro ao fazer login.');
            }
        } catch (error) {
            toast.error('Usuário ou senha inválidos', {
                position: "top-right",
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
                    <a href="/"><i className="bx bx-chevron-left"></i></a>
                    <a href="/login"><h1>Login</h1></a>

                    <form id="loginform" className="loginform" method="post" onSubmit={handleClickLogin}>
                        <div className="input-box">
                            <input type="text" name="login" placeholder="Username" required onChange={(e) => setLogin(e.target.value)}/>
                            <i className="bx bxs-user"></i>
                        </div>

                        <div className="input-box">
                            <input type="password" name="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)}/>
                            <i className="bx bxs-lock-alt"></i>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" />Lembre-se de mim</label>
                            <a href="./recovery">Esqueceu a senha?</a>
                        </div>

                        {errorMessage && <div className="error-message">{errorMessage}</div>}

                        <button type="submit" className="btn-login">Login</button>

                        <div className="register-link">
                            <p>Não tem uma conta? <a href="./register">Registre-se</a></p>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}


