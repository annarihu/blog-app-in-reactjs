import { useState } from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [isHidden, setHidden] = useState("true");

    const handleMenu = (e) => {
        e.preventDefault();
        setHidden(!isHidden);
    }

    return ( 
        <header class="md:flex md:items-center md:justify-between py-4 pb-0 md:pb-4">
            <div className="w-4/5 md:w-9/12 mx-auto md:flex md:items-center md:justify-center">
                <div className="flex items-center justify-between md:justify-center">
                    
                    <div class="flex items-center justify-between mb-4 md:mb-0 md:hidden">
                        <h1 class="leading-none text-2xl">
                            <Link to="/react-blog" class="text-4xl 2xl:text-8xl no-underline font-allison text-primary">
                                WriteUp
                            </Link>
                        </h1>
                    </div>

                    <nav className="md:hidden mb-4" onClick={handleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </nav>
                </div>
                <nav className={`md:block ${isHidden ? "hidden" : "block"} `}>
                    <ul className="list-reset md:flex md:items-center">
                        <li className="md:ml-4 md:mx-8">
                            <Link to="/blogs/add" className="nav-link">
                            New Blog
                            </Link>
                        </li>
                        <li className="md:ml-4 md:mx-8">
                            <Link to="/react-blog" className="nav-link">
                            Blogs
                            </Link>
                        </li>
                        <div class="items-center justify-between mb-4 md:mb-0 md:mx-8 hidden md:inline">
                            <h1 class="leading-none text-2xl">
                                <Link to="/react-blog" class="text-4xl 2xl:text-8xl no-underline font-allison text-primary">
                                    WriteUp
                                </Link>
                            </h1>
                        </div>
                        <li className="md:ml-4 md:mx-8">
                            <Link to="/about" className="nav-link">
                            About
                            </Link>
                        </li>
                        <li className="md:ml-4">
                            <Link to="/contact" className="nav-link">
                            Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                </div>
        </header>
    );
}
 
export default Navbar;