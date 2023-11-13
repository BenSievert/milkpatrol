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
  <div style={{height: `100vh`}} className="p-6 text-gray-900 bg-gray-100">
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="mb-6">
        {links.map((link) => (
          <Link
            className="mr-2 underline hover:bg-blue-200 p-1 rounded"
            to={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <Routes>
        {links.map((link) => (
          <Route element={<link.component />} path={link.path} />
        ))}
      </Routes>
    </BrowserRouter>
  </div>
);
