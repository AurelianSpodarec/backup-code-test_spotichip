import Button from "components/Button/Button";

function Nav() {
    return (
        <div className="flex space-x-8">

            <ul className="flex items-center space-x-8">
                <li><a className="text-[#a7a7a7] text-lg font-semibold" href="#">Premium</a></li>
                <li><a className="text-[#a7a7a7] text-lg font-semibold" href="#">Support</a></li>
                <li><a className="text-[#a7a7a7] text-lg font-semibold" href="#">Download</a></li>
            </ul>

            <div className="h-[25px] w-[1px] bg-white my-auto"></div>

            <div className="flex items-center space-x-8">
                <a className="text-[#a7a7a7] text-lg font-semibold" href="#">Sign up</a>
                <Button className="text-black font-semibold rounded-full bg-white py-3 px-8">Log In</Button>
            </div>

        </div>
    )
}

export default Nav;