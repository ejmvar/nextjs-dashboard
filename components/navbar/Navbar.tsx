import { HomeIcon } from "@primer/octicons-react"
import { ActiveLink } from '@/components';

interface NavItemModel {
  name: string
  href: string
  icon?: React.ReactNode
  className?: string
}

const iconClass = "h-6 w-6 text-white mr-2"
const navItems:NavItemModel[] = [
  {
    name: "Home", href: "/",
    icon: <HomeIcon className={`${iconClass}`} />
  },
  { name: "  ", href: "", className: "flex flex-1 " },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
]

export const Navbar = () => {
  return (
    <>
      <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded text-amber-50 text-1xl">
        {navItems.map((item) => (
          <ActiveLink
            key={item.name}
            text={item.name}
            path={item.href}
            className={`m-2 p-2 items-baseline flex flex-row ${item.className || ''}`}
          >
            {item.icon}
          </ActiveLink>
        ))}
      </nav>
    </>
  )
}