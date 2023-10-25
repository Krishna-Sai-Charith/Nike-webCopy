import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../Constants';

const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29}  />
            </a>
            <ul className="flex-1 flex justify-center items-center ml-40 gap-24 max-lg:hidden">
               {navLinks.map((item)=>(
                <li key={item.label}>
                  <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-orange-500">
                    {item.label}
                  </a>
                </li>
               ))}
               <li label="Sign Up/ Explore now" className="font-montserrat leading-normal text-lg ml-12 text-black hover:text-orange-500"><a href="">Sign Up/ Explore Now</a></li>
            </ul>
            <div className="hidden max-lg:block">
                <img src={hamburger} alt="Hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default NavBar