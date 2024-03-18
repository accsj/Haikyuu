import React from 'react';
import '../../assets/styles/AuthProfile.css'
import HinataImage from '../../assets/imgs/Hinata-logo.png'



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
