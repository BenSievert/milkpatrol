import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {links} from "./components/NavBar";
import  NavBar from './components/NavBar'

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <div className="p-6 bg-gradient-to-br from-violet-200 to-pink-500 min-h-screen font-sans text-gray-900">
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <NavBar />
      <Routes>
        {links.map((link) => (
          <Route element={<div className='flex justify-center text-sm md:text-xl'>
            <div className='bg-pink-100 p-16 rounded-3xl border-2 border-violet-600 shadow-xl'>
            <link.component />
          </div>
          </div>} path={link.path} />
        ))}
      </Routes>
    </BrowserRouter>
  </div>
);
