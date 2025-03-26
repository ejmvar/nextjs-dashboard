import Link from "next/link"



export const Navbar = () => {
  return (
    <>
      <nav className="flex bg-blue-800 bg-opacity-30 
    p-2 m-2 rounded
    text-amber-50 text-1xl">

        <span className="p-2 items-center"> Home </span>

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