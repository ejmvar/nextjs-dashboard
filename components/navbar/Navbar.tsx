

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 
    p-2 m-2 rounded">


      <div className="text-amber-50 text-2xl"> 
      <span> Home </span>
      <a href="/About" className=""> About </a>
      <a href="/Contact"  className=""> Contact </a>
      <a href="/Pricing" className=""> Pricing </a>
      <a href="/General" className=""> General </a>
      </div>
    </nav> 
    )
  }