import React from 'react';

import './Menu.css';

function Menu() {
    return(
        <nav>
            <div className='logo'>
                <h4>LOGO GREEN TEAM SUPER SUPER</h4>
            </div>
                <ul className="menu-links">
                    <li className="custom-underline-inline"><a href="#">Home</a></li>
                    <li className="custom-underline-inline"><a href="#">About App</a></li>
                    <li className="custom-underline-inline"><a href="#">Team</a></li>
                </ul>
        </nav>
    );
}

export default Menu;