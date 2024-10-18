import React from 'react'

import './index.css'
import { assets } from '../../assets/assets'
const Footer = () => {

    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt='' />
                    <p>Stay connected with us for the latest updates and offers. Follow us on social media to stay informed and get inspired.</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt='' />
                        <img src={assets.twitter_icon} alt='' />
                        <img src={assets.linkedin_icon} alt='' />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>bubble..</h2>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 63855 12345</li>
                        <li>Email:support@bubble.com</li>
                    </ul>
                </div>
                <div className='footer-copyright'>
                    <p>Download our app for a better experience on the Google Play Store and Apple App Store!</p>
                    <div className='footer-app-store'>
                        <img src={assets.app_store} alt='' />
                        <img src={assets.play_store} alt='' />
                    </div>

                    <p>© 2024 Bubble. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer