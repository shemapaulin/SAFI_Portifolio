import Socials from "./Socials";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px]  lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center text-white  w-full justify-between">
        <Link to="/" className="max-w-[200px] ">
          <b className="text-amber-900 font-size-[50px]  ">SAFI Visuals</b>
        </Link>
        <nav className="hidden xl:flex gap-x-8 font-semibold ">
          <Link to="/" className="text-red hover:text-primary transition hover:text-amber-900">
            Home
          </Link>
          <Link to="/About" className="text-red hover:text-primary transition hover:text-amber-900">
            About
          </Link>
          <Link
            to="/Portfolio"
            className="text-red hover:text-primary transition hover:text-amber-900"
          >
            Portifolio
          </Link>
          <Link
            to="/Contact"
            className="text-red hover:text-primary transition hover:text-amber-900"
          >
            Contact
          </Link>
        </nav>
      </div>
 <Socials />
 <MobileNav />
    </header>
  );
};

export default Header;
