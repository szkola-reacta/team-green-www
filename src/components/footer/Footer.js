import React from 'react'

import './Footer.css'

function Footer() {
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-content">
                    <form>
                    <h3>Get Recipes</h3>
                    <p>Sign up for the weekly new recipes!</p>
                        <input className="email-sign-up" type="email" id="email" name="email" placeholder="hello@recipes.com"/>
                        <button className="button-sign-up" type="submit"><a href="#">Sign Up</a></button>
                    </form>
                </div>
                <div className="footer-top-name">
                    <a href="#" className="custom-underline"><h2>RecipeTeam</h2></a>
                </div>
            </div>
            <div className="footer-content">
                <div className="col">
                    <h4>COMPANY</h4>
                    <a href="#">About Us</a>
                    <a href="#">Our Team</a>
                    <a href="#">Newsletter</a>
                </div>
                <div className="col">
                    <h4>GET HELP</h4>
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="col">
                    <h4>EXPLORE</h4>
                    <a href="#">Recipes</a>
                    <a href="#">Food</a>
                </div>
                <div className="col">
                    <h4>FOLLOW US</h4>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                </div>
            </div>
            <div className="footer-bottom">
                <strong>&copy;{new Date().getFullYear()} RecipeTeam</strong> | <a href="#">All rights reserved</a> | <a href="#">Terms of Use</a> | <a href="#">Privacy</a>
            </div>
            <div className="underline"></div>
        </div>
    )
}

export default Footer;