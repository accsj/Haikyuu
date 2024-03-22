import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Content from './components/MainContent/Content';
import HinataPage from './pages/Hinata/Hinata';
import KageyamaPage from './pages/Kageyama/Kageyama';
import NishinoyaPage from './pages/Nishinoya/Nishinoya';
import TsukishimaPage from './pages/Tsukishima/Tsukishima';
import DaichiPage from './pages/Daichi/Daichi';
import AzumanePage from './pages/Azumane/Azumane';
import LoginPage from './pages/Login/Login';
import RegisterPage from './pages/Register/Register';
import RecoveryPage from './pages/Recovery/Recovery';
import PassRecovery from './pages/PassRecovery/PassRecovery';
import ProfilePage from './pages/Profile/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCheckAuthentication from './api/Auth/Auth';




const AppRouter = () => {
    const isAutenticado = useCheckAuthentication();
    console.log(isAutenticado);

    return (
        <Router>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Content />} />
                    <Route exact path="hinata" element={<HinataPage />} />
                    <Route exact path="kageyama" element={<KageyamaPage />} />
                    <Route exact path="nishinoya" element={<NishinoyaPage />} />
                    <Route exact path="daichi" element={<DaichiPage />} />
                    <Route exact path="tsukishima" element={<TsukishimaPage />} />
                    <Route exact path="azumane" element={<AzumanePage />} />
                </Route>
                <Route exact path="login" element={isAutenticado ? <Navigate to='/profile'/> : <LoginPage />} />
                <Route exact path="register" element={isAutenticado ? <Navigate to='/profile' /> : <RegisterPage/>} />
                <Route exact path='recovery' element={isAutenticado ? <Navigate to='/'/> : <RecoveryPage />} />
                <Route exact path='password-recovery/:token' element={isAutenticado ? <Navigate to='/'/> : <PassRecovery />} />
                <Route exact path='profile' element={isAutenticado ? <ProfilePage /> : <Navigate to='/login'/>}/>
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);



