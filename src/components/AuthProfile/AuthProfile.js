import React from 'react';
import HinataImage from '../../assets/imgs/Hinata-logo.png';
import '../AuthProfile/AuthProfile.css';



const AuthProfile = () => {
    return (
        <div className='cabecalho'>
            <button className="user_button">
                <a href='/profile'>
                    <img src={HinataImage} alt="Profile" className="user_image" />
                </a>
            </button>
        </div>
        
    );
};

export default AuthProfile;
