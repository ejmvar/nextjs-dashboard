import { HomeIcon } from "@primer/octicons-react"
import { ActiveLink, ActiveLinkProps } from '@/components';
// import { ActiveLinkProps } from '@/components/active-link/ActiveLink';



const isActiveClass = "text-blue-200 underline border" // global
const iconClass = "h-6 w-6 text-white mr-2" // only some icons
const navItems: ActiveLinkProps[] = [ // detailed list
  {
    text: "Home", path: "/",
    icon: <HomeIcon className={`${iconClass}`} />
  },
  { text: "  ", path: "", classSpecialItem: "flex flex-1 " },
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
            isActiveClass={isActiveClass}
            {...item}
            // {item.icon}
            // text={item.text}
            // path={item.path}
            // classSpecialItem : ensure attribute sent
            classSpecialItem={`${item.classSpecialItem || ''}`}
            baseClass={`
              flex flex-row  items-center
              mr-2 rounded p-2
              border-4 border-double
              border-white-900

              hover:bg-blue-200   hover:bg-opacity-200
              hover:text-red-700  hover:text-opacity-800
              hover:border-green-200 hover:border-opacity-800
              text-white
              
              
              `}
          >
          </ActiveLink>
        ))}
      </nav>
    </>
  )
}