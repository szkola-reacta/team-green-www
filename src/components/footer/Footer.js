import React from 'react'

import './Footer.css'

function Footer() {
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                     <div className="col">
                        <h4>Location</h4>
                        <ul className="list">
                            <li>321 555 345</li>
                            <li>Poland</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-section links">
                    <div className="col">
                        <h4>Location</h4>
                        <ul className="list">
                            <li>321 555 345</li>
                            <li>Poland</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-section contact-form">
                     <div className="col">
                        <h4>Location</h4>
                        <ul className="list">
                            <li>321 555 345</li>
                            <li>Poland</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                &copy;{new Date().getFullYear()} Menu App Inc | All rights reserved | Terms of service | Privacy
            </div>
        </div>
    )
}

export default Footer;