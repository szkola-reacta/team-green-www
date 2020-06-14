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
                    <a href="#" className="custom-underline">About Us</a>
                    <a href="#" className="custom-underline">Our Team</a>
                    <a href="#" className="custom-underline">Newsletter</a>
                </div>
                <div className="col">
                    <h4>GET HELP</h4>
                    <a href="#" className="custom-underline">FAQ</a>
                    <a href="#" className="custom-underline">Contact Us</a>
                </div>
                <div className="col">
                    <h4>EXPLORE</h4>
                    <a href="#" className="custom-underline">Recipes</a>
                    <a href="#" className="custom-underline">Food</a>
                </div>
                <div className="col">
                    <h4 className="space">FOLLOW US</h4>
                    <div className="icons-container">
                        <li className="custom-color-facebook"><a href="#"><i class="fab fa-facebook-f fa-lg"></i></a></li>
                        <li className="custom-color-twitter"><a href="#"><i class="fa fa-twitter fa-lg"></i></a></li>
                        <li className="custom-color-instagram"><a href="#"><i class="fa fa-instagram fa-lg"></i></a></li>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <strong>&copy;{new Date().getFullYear()} RecipeTeam</strong> |
                <a href="#" className="custom-underline-inline"> All rights reserved</a> |
                <a href="#" className="custom-underline-inline"> Terms of Use</a> |
                <a href="#" className="custom-underline-inline"> Privacy </a>
            </div>
            <div className="underline"></div>
        </div>
    )
}

export default Footer;