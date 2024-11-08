import { useState, useEffect } from "react";

import Nav from "./ui/Header/Nav";
import MobileNav from "./ui/Header/MobileNav";
import { BrowserRouter as Router } from "react-router-dom";
// import { usePathname } from "next/navigation";

const Header = () => {
    const [header, setHeader] = useState(false);
    // const pathname = usePathname();

    useEffect(() => {
        const scrollYPos = window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        // remove event
        return () => window.removeEventListener("scroll", scrollYPos);
    }, []);

    return (
        <header
            className={`${
                header
                    ? "py-1 bg-white shadow-lg dark:bg-accent"
                    : "py-1 bg-white dark:bg-accent"
            } sticky top-0 z-30 transition-all 
            `}
        >
            <div className={`${
                header
                    ? "mx-24 text-black"
                    : "mx-24 text-white"}`}>
                <div className="flex justify-between items-center">
                   <a href="#">
                   <img src="http://innovador.solutions/wp-content/uploads/2024/06/logo.svg" className="h-16" alt="" />
                   </a>
                    <div className="flex items-center gap-x-6">
                        {/* nav */}
                        <Router>
                        <Nav
                            containerStyles="hidden lg:flex gap-x-8 items-center transition-all"
                            linkStyles="relative font-bold text-lg hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-12 h-[3px] bg-primary w-full"
                        />
                        </Router>
                        {/* <ThemeToggler /> */}
                        {/* mobile nav */}
                        <div className="lg:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
