import { BrowserRouter, Link, useLocation } from "react-router-dom";

import CustomRoutes from "routes/CustomRoutes";

import { PlayingBar } from "../molecules";
import { Footer, Header, Nav } from "../organisms/Layout";

function Layout() {
    return (
        <BrowserRouter>
        <div className="relative bg-black h-screen overflow-hidden">


            <div className="flex flex-col relative h-screen">

                <div className="relative flex flex-row h-full">

                    <Nav />

                    <div className="relative h-full w-full">
                    <div className="default-scrollbar absolute top-0 right-0 bottom-0 left-0 overflow-hidden overflow-y-auto">
                 

                        <Header />

                        <main className="h-full bg-[#121212]">
                            <CustomRoutes />
                        </main>

                        <Footer />

            
                    </div>
                    </div>

                </div>

                <PlayingBar />

            </div>


        </div>
        </BrowserRouter>
    )
}

export default Layout;