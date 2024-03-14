import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar, {links} from "./components/NavBar.tsx";
import CowPrint from "./components/CowPrint.tsx";
import { useState } from "react";


function App() {
  const [spin, setSpin] = useState(false)

  return (
    <div className={`p-2 md:p-6 min-h-screen font-sans text-gray-900 `}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <NavBar />
        <div className='text-center'>
          <CowPrint />
          <div className={`text-left bg-pink-100 p-4 md:p-16 rounded-3xl border-4 border-black shadow-2xl inline-block relative z-10 mt-4 md:mt-0 ${spin && `animate-spin`}`}>
            <Routes>
              {links.map((link, i ) => (
                <Route key={i} element={<div className='flex justify-center text-sm md:text-xl'>

                  <link.component />
                </div>
                } path={link.path} />
              ))}
            </Routes>
          </div>
          <div className='text-center my-2'><button onClick={() => setSpin(true)} className={`z-20 relative p-3 bg-green-400 rounded-xl font-bold border-black border-2 ${spin && `font-extrabold tracking-wider`}`}>{spin ? `THIS CANNOT BE UNDONE` : `Make it spin!`}</button></div>
        </div>

      </BrowserRouter>

    </div>)
}

export default App;
