import React from 'react';

import { RenderLogo } from './sub-components';
import RenderNavList from './sub-components/Nav/NavList';

function Nav() {
    return (
        <nav className="flex flex-cols w-[285px]">
        <div className="pt-6">

            <RenderLogo />

            <RenderNavList />
    
        </div>
        </nav>
    )
}

export default Nav;