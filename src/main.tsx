import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import FAQ from "./routes/FAQ";
import About from "./routes/About";
import Support from "./routes/Support";
import { Link } from "react-router-dom";

const links = [
  { title: `Home`, path: `/`, component: Home },
  { title: `FAQ`, path: `faq`, component: FAQ },
  { title: `About`, path: `about`, component: About },
  {title: `Support`, path: `support`, component: Support }
];
ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <div className="p-6 text-gray-900">
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div>
        {links.map((link) => (
          <Link className="mr-2 underline hover:bg-gray-100 p-1 rounded" to={link.path}>{link.title}</Link>
        ))}
      </div>
      <Routes>
        {links.map((link) => <Route element={<link.component />} path={link.path} />)}
      </Routes>
    </BrowserRouter>
  </div>
);
