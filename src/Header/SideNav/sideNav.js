import React from 'react';
import SimpleSideNav from 'react-simple-sidenav';

import SideNavItems from './sideNavItems';

const SideNavigation = (props) => {
    return(
        <div>
            <SimpleSideNav
            showNav = {props.showNav}
            onHideNav = {props.onHideNav}>
            <SideNavItems/>
            </SimpleSideNav>
        </div>
    )
}

export default SideNavigation;