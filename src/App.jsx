import React from 'react';
import './assets/styles/globals.css';
import Header from './components/Header/Header';
import Aside from './components/Sidebar/Siderbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';



export default function App() {

    return (
        <div className='App' >
            <Header className='cabecalho'/>
            <main className='main-content'>
                <Outlet />
            <aside>
                <Aside />
            </aside>
            </main>
            <Footer />
        </div>
    );
}