import React from 'react';
import logo from '../spa-logo.png';
import { FaHandHoldingHeart, FaPaw, FaBell } from 'react-icons/fa';

export default function Header() {
    return (
        <header>
            <a href='https://www.la-spa.fr/' target='_blank' rel='noopener noreferrer'>
            <img src={logo} className='App-logo' alt='logo' /></a>

            <nav>
                <ul>
                    <li><a href='https://compagnon.la-spa.fr/?reserved_code_media=W22PZ0Z1F&utm_source=bouton&utm_medium=site&utm_campaign=DRTV2022' target='_blank' rel='noopener noreferrer'><FaHandHoldingHeart className='iconNav'/><span className='navCategory'>Je deviens Compagnon SPA</span></a></li>
                    <li><a href='https://www.la-spa.fr/adoption/' target='_blank' rel='noopener noreferrer'><FaPaw className='iconNav'/><span className='navCategory'>J'adopte</span></a></li>
                    <li><a href='https://www.la-spa.fr/maltraitance/signaler-une-maltraitance/' target='_blank' rel='noopener noreferrer'><FaBell className='iconNav'/><span className='navCategory'>Je signale</span></a></li>
                    <li><a href='https://www.la-spa.fr/espaces-personnels' target='_blank' rel='noopener noreferrer' id='btn-connexion'>Accès membre</a></li>
                </ul>
            </nav>
        </header>
    );
}
