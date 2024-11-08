import {Link, useLocation } from "react-router-dom";


import { motion } from "framer-motion";
import { ChevronRight, MenuIcon, PlusIcon, SearchIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import Sidebarmain from "./Sidebar";
import { useState } from "react";

const links = [
  { location: "#", name: "home" },
  { location: "#About", name: "About us" },
  { location: "#Services", name: "Services" },
  // { location: "/", name: "Products" },
  { location: "#Contact", name: "Contact Us" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(links[0]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className={`${containerStyles} text-black`}>
      {links.map((link, index) => {
        return (
        <>
        
        <a
          key={index}
          href={link.location}
          className={`capitalize ${linkStyles} ${activeLink?.location === link.location && ('text-primary')}`}
          onClick={() => handleLinkClick(link)}
        >
          {/* Underline animation only for active link */}
          {activeLink?.location === link.location && (
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              exit={{ width: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </a>
         </>
   
        );
      }
      )}
        {/* <Link>
           <SearchIcon strokeWidth={4} className="h-4" />
         </Link>
    */}
         <Link className="lg:block hidden">
         <Sheet>
           <SheetTrigger asChild> 
           <MenuIcon />
           </SheetTrigger>
           <SheetContent className='overflow-y-auto'>
             <Sidebarmain/>
           </SheetContent>
         </Sheet>
         
         </Link>
    </div>
  );
};

export default Nav;
