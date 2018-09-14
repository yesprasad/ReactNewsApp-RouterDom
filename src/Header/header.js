import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './header.css';
import SideNavigation from './SideNav/sideNav';


const Header = (props) => {

    const navBars = () => (
        <div className='header-bars'>
            <FontAwesome name='bars'
            onClick = {props.onShowNav}/>
        </div>

    )

    const logo = () => (
            <Link to='/' className='logo-box'>
            <img alt='News Logo' src='/images/Google-img.png' className='logo' />
            </Link>
        )

    return(
        <header className='headerMain'>
        <SideNavigation  {...props}/>
            <div className='headerOptions'>
                {logo()}
                {navBars()}
            </div>
        </header>
    )
}

export default Header;