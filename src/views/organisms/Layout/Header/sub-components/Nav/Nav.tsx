import { Button } from "views/atoms";

function Nav() {
    return (
        <div className="flex space-x-8">

            <ul className="flex items-center space-x-8">
                <li><a className="block text-[#a7a7a7] text-md tracking-[1.76px] cursor-default hover:text-white hover:scale-105 font-semibold" href="#">Premium</a></li>
                <li><a className="block text-[#a7a7a7] text-md tracking-[1.76px] cursor-default hover:text-white hover:scale-105 font-semibold" href="#">Support</a></li>
                <li><a className="block text-[#a7a7a7] text-md tracking-[1.76px] cursor-default hover:text-white hover:scale-105 font-semibold" href="#">Download</a></li>
            </ul>

            <div className="h-[25px] w-[1px] bg-white my-auto"></div>

            <div className="flex items-center space-x-8">
                <a className="text-[#a7a7a7] text-md tracking-[1.76px] cursor-default hover:text-white hover:scale-105 font-semibold" href="#">Sign up</a>
                <Button className="text-black font-semibold rounded-full bg-white py-3 px-8">Log In</Button>
            </div>

        </div>
    )
}

export default Nav;