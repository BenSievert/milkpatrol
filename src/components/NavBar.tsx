import {useState} from "react";
import {Link, useLocation} from "react-router-dom";

import Home from "../routes/Home";
import FAQ from "../routes/FAQ";
import About from "../routes/About";
import Support from "../routes/Support";
import Schedule from "../routes/Schedule";
export const links = [
  { title: `Home`, path: `/`, component: Home },
  { title: `Schedule`, path: `/schedule`, component: Schedule },
  { title: `About`, path: `/about`, component: About },
  { title: `FAQ`, path: `/faq`, component: FAQ },
  { title: `Support`, path: `/support`, component: Support },
];
function NavBar() {
  const location = useLocation();
  const {pathname } = location;
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className='md:hidden inline-block shadow bg-violet-300 rounded-2xl' onClick={() => setOpen(!open)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 m-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className={`border-[3px] border-black mb-2 md:mb-6 bg-pink-600 py-4 px-6 rounded-2xl md:rounded-full inline-block bg-gradient-to-tl md:w-auto w-full from-violet-600 to-pink-600 shadow-xl ${open || `hidden md:inline-block`}`}>
        {links.map((link, i) => (
          <Link
            key={i}
            onClick={() => setOpen(false)}
            className={`mb-1 text-sm mr-2 hover:bg-pink-400 px-3 py-2 md:p-2 rounded-2xl font-bold block md:inline-block ${pathname == link.path ? `bg-pink-400 text-violet-900` : `text-white`}`}
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