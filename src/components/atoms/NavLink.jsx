/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";

const NavLinks = ({ linksLayout, bgColor, handleNavButton }) => {

  const linkStyle =
    linksLayout === "halfPage" ? 'group-hover:ml-4' : ''

  const linkColor =
    bgColor === "light" ?
      'text-my-color hover:text-[#F2A227]'
      :
      'text-my-color hover:text-sec-color font-bold'
  return (
    <>
      {navLinks.map((link, index) => (
          <li key={index} className={`${linksLayout === 'halfPage' && 'group w-full'}`} >
            <NavLink
              to={link.path}
              onClick={handleNavButton}
              className={`text-lg ${linkStyle} ${linkColor} transition-all duration-500`}
            >
              {link.label}
            </NavLink>
          </li>
        )
      )}
    </>
  );
};

export default NavLinks;