function PlayingBar() {

    const isUserLogged = false;

    if(!isUserLogged) {
        return (
            <div className="hidden lg:flex h-12 z-20 px-10 py-8" style={{ "backgroundImage": "linear-gradient(90deg, #af2896, #509bf5)" }}>
            <div className="flex justify-between items-center w-full">
    
                {/* <Link to="/signup"> */}
    
                    <div>
                        <p className="uppercase font-thin text-sm text-white">Preview of spotify</p>
                        <p className="text-white">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                    </div>
    
                    <div>
                        <button className="font-bold rounded-full bg-white py-3 px-6">Sign up free</button>
                    </div>
    
                {/* </Link> */}
    
            </div>
            </div>
        )
    }
    return (
        <div>
            Media player
        </div>    
    )
}

export default PlayingBar;