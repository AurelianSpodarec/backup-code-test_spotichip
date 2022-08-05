import { CustomRoutes } from 'config';

import { BrowserRouter, Link, useLocation } from "react-router-dom";

function Layout() {
    return (
        <BrowserRouter>

            <main className="bg-[#121212]">
                <CustomRoutes />
            </main>

        </BrowserRouter>
    )
}

export default Layout;