import { HomeIcon } from "@primer/octicons-react"
import { ActiveLink, ActiveLinkProps } from '@/components';
import React from "react";
// import { ActiveLinkProps } from '@/components/active-link/ActiveLink';



const navItems: ActiveLinkProps[] = [ // detailed list
  {
    text: "Home", path: "/",
    icon: <HomeIcon className="icon"  />
    // icon: <HomeIcon   />
  },
  { text: "  ", path: "", 
    // classSpecialItem: "flex flex-1 ",
    isFiller: true, 

  },
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
  { text: "Pricing", path: "/pricing" },
]

export const Navbar = () => {
  return (
    <>
      <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded text-amber-50 text-1xl">
        {navItems.map((item) => (
          <ActiveLink
            key={item.path}
            {...item}
            
          >
          </ActiveLink>
        ))}
      </nav>
    </>
  )
}