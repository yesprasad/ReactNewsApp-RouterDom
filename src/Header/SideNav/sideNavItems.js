import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './sideNav.css';
import navItems from './navItems';

const SideNavItems = () => {
    
    const showItems = () => {
        return navItems.map( (item, idx) => {
            return(
                <div key={idx} className={item.style}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    return(
        <div>
            {showItems()}
        </div>
    )

    
}

export default SideNavItems;