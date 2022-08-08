import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { RenderLogo } from './sub-components';
import RenderNavList from './sub-components/Nav/NavList';

function Nav() {
    const location = useLocation()
    const splitLocation = location.pathname.split("/");

    return (
        <>
        <nav id="desktop-nav" className="hidden lg:flex flex-cols w-[285px]">
        <div className="pt-6">

            <RenderLogo />
            <RenderNavList />
    
        </div>
        </nav>

        {/* TODO: Refactor */}
        <nav id="mobile-nav" className="lg:hidden fixed bottom-0 right-0 left-0 w-full h-[70px] z-40 bg-black/90 flex flex-cols">
        
 


            <div className="flex justify-between w-full items-center align-middle">


                <NavLink to="/" className="flex flex-col w-full h-full align-center justify-center items-center">
                {({ isActive }) => (
                <>

                    {"/" + splitLocation[1] === "/" ?
                        
                        !isActive ?
                        <svg className="h-6 w-6 fill-white" role="img" height="24" width="24" viewBox="0 0 24 24">
                            <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
                        </svg> : <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="h-6 w-6 fill-white"><path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path></svg>

                        : ""
                    } : "" 
                    
                    <span className="text-white text-xs">Home</span>
                </>
                )}
                </NavLink>


                <NavLink to="/genre" className="flex flex-col w-full h-full align-center justify-center items-center">
                    <svg className="h-6 w-6 fill-white" role="img" height="24" width="24" viewBox="0 0 24 24">
                        <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
                    </svg>
                    <span className="text-white text-xs">Genre</span>
                </NavLink>
                <NavLink to="/playlists" className="flex flex-col w-full h-full align-center justify-center items-center">
                    <svg className="h-6 w-6 fill-white" role="img" height="24" width="24" viewBox="0 0 24 24">
                        <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
                    </svg>
                    <span className="text-white text-xs">Home</span>
                </NavLink>
                <NavLink to="/" className="flex flex-col w-full h-full align-center justify-center items-center">
                    <svg className="h-6 w-6 fill-white" role="img" height="24" width="24" viewBox="0 0 24 24">
                        <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
                    </svg>
                    <span className="text-white text-xs">Home</span>
                </NavLink>
            </div>



        </nav>
        </>
    )
}

export default Nav;