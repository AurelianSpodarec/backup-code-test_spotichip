function SearchBar() {

    return (
        <div className="ml-8">

            <div className="flex relative">
                <div className="absolute left-[12px] top-[9px]">
                    <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                    </svg>
                </div>
                <input 
                    className="pl-11 pr-11 h-[40px] text-sm rounded-full p-2 w-[364px]" 
                    placeholder="Artists, songs, or podcasts"
                />
              
                {/* <button className="absolute right-[12px] top-[9px]" aria-label="Clear search field">
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                        <path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path>
                    </svg>
                </button> */}
               
            </div>
            
        </div>
    )
}

export default SearchBar;