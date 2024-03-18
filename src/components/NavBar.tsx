import {useContext, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import Home from "../routes/Home";
import FAQ from "../routes/FAQ";
import About from "../routes/About";
import Support from "../routes/Support";
import Schedule from "../routes/Schedule";
import { ThemeContext } from "../context/theme"

export const links = [
  { title: `Home`, path: `/`, component: Home, heading: `Central Illinois' Number 1 Dairy Based Band` },
  { title: `Schedule`, path: `/schedule`, component: Schedule },
  { title: `About`, path: `/about`, component: About },
  { title: `FAQ`, path: `/faq`, component: FAQ },
  { title: `Support`, path: `/support`, component: Support },
];

function NavBar() {
  const location = useLocation();
  const theme = useContext(ThemeContext)?.navBar;
  const {pathname } = location;
  const [open, setOpen] = useState(false)

  return (
    <div className='relative z-20'>
      <div className={`rounded-xl md:hidden inline-block shadow ${theme.navBar}`} onClick={() => setOpen(!open)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 m-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className={`${theme.navBar} mt-14 md:mt-0 left-0 absolute md:static z-20 border-[3px] border-black mb-2 md:mb-6 py-4 px-6 rounded-2xl md:rounded-full inline-block  md:w-auto w-full  shadow-xl ${open || `hidden md:inline-block`}`}>
        {links.slice(1).map((link, i) => (
          <Link
            key={i}
            onClick={() => setOpen(false)}
            className={`${theme.linkHover} mb-1 text-sm mr-2  px-3 py-2 md:p-2 rounded-2xl font-bold block md:inline-block ${pathname == link.path ? theme.link : `text-white`}`}
            to={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;