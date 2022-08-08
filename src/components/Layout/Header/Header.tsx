import { HistoryButtons, Nav, SearchBar } from "./sub-components"


function Header() {
    return (
        <header className="hidden lg:block sticky justify-centerz-30 z-30 top-0 right-0 left-0 h-[58px] bg-[#070707]">
        <div className="flex justify-between w-full px-8 h-full items-center">

            <div className="flex items-center">
                <HistoryButtons />
                {/* <SearchBar /> */}
            </div>

            <Nav />

        </div>
        </header>
    )
}

export default Header