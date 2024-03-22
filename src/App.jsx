import React from 'react';
import Header from './components/Header/Header';
import Aside from './components/Sidebar/Siderbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';
import './assets/styles/Main.css';
import './'



export default function App() {

    return (
        <div className='App' >
            <Header />
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