import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {
    return(
        <div className='footer'>
            <Link to='/' className='logo'>
                <img alt='footer-image' src='/images/Google-img.png'/>
            </Link>
            <div>
                <FontAwesome name='copyright'/>
                2018 Eshwar Prasad Yaddanapudi
            </div>
        </div>
    )
}

export default Footer;