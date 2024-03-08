import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {links} from "./components/NavBar";
import  NavBar from './components/NavBar'
import CowPrint from "./components/CowPrint.tsx";

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <div className="p-2 md:p-6 bg-gradient-to-br from-violet-200 to-pink-500 min-h-screen font-sans text-gray-900">
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className='relative z-10'><NavBar /></div>
      <div className='text-center'>
        <CowPrint />
      <div className='text-left bg-pink-100 p-4 md:p-16 rounded-3xl border-2 border-black shadow-2xl inline-block relative z-10'>
      <Routes>
        {links.map((link, i ) => (
          <Route key={i} element={<div className='flex justify-center text-sm md:text-xl'>

            <link.component />
          </div>
       } path={link.path} />
        ))}
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  </div>
);
