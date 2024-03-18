import React from 'react';
import HaikyuuLogo from '../HaikyuuLogo/HaikyuuLogo';
import BtnAuth from '../BtnAuth/BtnAuth';
import useIsAuthenticated from '../../api/Auth/Auth';
import AuthProfile from '../AuthProfile/AuthProfile';



const Header = () => {
    const isAutenticado = useIsAuthenticated();


    return (
        <header className="cabecalho">
            <HaikyuuLogo />
            {isAutenticado ? (
                <>
                <AuthProfile />
                </>
            ) : (
                <>
                <BtnAuth />
                </>
            )}
        </header>
    );
}

export default Header;

