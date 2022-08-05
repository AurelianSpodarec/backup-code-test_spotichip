import { HistoryButtons, Nav, SearchBar } from "./sub-components"


function Header() {
    return (
        <header className="sticky z-30 top-0 right-0 left-0 h-[64px] bg-[#121212]">
        <div className="flex justify-between w-full px-8 py-3">

            <div className="flex items-center">
                <HistoryButtons />
                <SearchBar />
            </div>

            <Nav />

        </div>
        </header>
    )
}

export default Header