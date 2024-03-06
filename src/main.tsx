import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import FAQ from "./routes/FAQ";
import About from "./routes/About";
import Support from "./routes/Support";
import Schedule from "./routes/Schedule";
import { Link } from "react-router-dom";

const links = [
  { title: `Home`, path: `/`, component: Home },
  { title: `Schedule`, path: `schedule`, component: Schedule },
  { title: `FAQ`, path: `faq`, component: FAQ },
  { title: `About`, path: `about`, component: About },
  { title: `Support`, path: `support`, component: Support },
];
ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <div className="p-6 text-gray-900">
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="mb-6 bg-pink-600 py-4 px-6 rounded-full inline-block">
        {links.map((link) => (
          <Link
            className="mr-2 underline hover:bg-pink-400 p-2 rounded-2xl font-bold text-white"
            to={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <Routes>
        {links.map((link) => (
          <Route element={<div className='flex justify-center text-xl'>
            <div className='bg-pink-100 p-16 rounded-3xl border-2 border-pink-400 shadow-xl'>
            <link.component />
          </div>
          </div>} path={link.path} />
        ))}
      </Routes>
    </BrowserRouter>
  </div>
);
