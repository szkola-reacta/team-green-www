import React from 'react';

import Logo from '../Logo';
import Menu from '../Menu';
import './Header.css';

function Hello() {
    return(
        <div className='header'>
            <div className='header-logo'>
                <Logo />
            </div>
            <div className='header-menu'>
                <Menu />
            </div>
        </div>
    );
}

export default Hello;