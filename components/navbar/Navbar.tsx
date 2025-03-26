import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"

const iconClass = "h-6 w-6 text-white mr-2"
const navItems = [
  {
    name: "Home", href: "/",
    icon: <HomeIcon className={`${iconClass}`} />
  },
  { name: " ... ", href: "", className: "flex flex-1 border rounded" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
]

export const Navbar = () => {
  return (
    <>
      <nav className="flex bg-blue-800 bg-opacity-30 
    p-2 m-2 rounded
    text-amber-50 text-1xl">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`m-2 p-2 items-baseline flex flex-row ${item.className}`} 
          >
            {item.icon}
            {item.name}
          </Link>
        )
        )
        }



      </nav>

      <nav className="flex bg-blue-800 bg-opacity-30 
    p-2 m-2 rounded
    text-amber-50 text-1xl">
        <Link href="/" className="p-2 items-center flex flex-row">
          <HomeIcon className="h-6 w-6 text-white mr-2" />
          <span>
            Home

          </span>
        </Link>

        <span className="flex flex-1 border='3px double green' 
         rounded-lg bg-blue-800 bg-opacity-30

          p-2 items-center justify-center
        
        "> . . . </span>
        <Link href="/about" className="p-2 items-baseline "> About </Link>
        <Link href="/contact" className="p-2 items-baseline "> Contact </Link>
        <Link href="/pricing" className="p-2 items-baseline "> Pricing </Link>
        <Link href="/general" className="p-2 items-baseline "> General </Link>

      </nav>



    </>
  )
}