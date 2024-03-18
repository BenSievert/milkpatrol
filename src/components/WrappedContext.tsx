import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar, {links} from "./NavBar.tsx";
import CowPrint from "./CowPrint.tsx";
import {useState, useContext } from "react";
import { ThemeContext } from "../context/theme.ts";
import SecretPage from "../routes/SecretPage.tsx";

function WrappedContext({setTheme}: any) {
  const [spin, setSpin] = useState(false)
  const [doubleSpin, setDoubleSpin] = useState(false);
  const context =  useContext(ThemeContext);
  const type = context?.type;
  const theme = context?.main;

  return (
      <div  style={type == `sonic` ? {backgroundImage: `url('ghz.png')`}: {}} className={`${theme.background} p-2 md:p-6 min-h-screen font-sans text-gray-900 ${doubleSpin && `animate-spin`}`}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <NavBar/>
          {type == `milk` && <CowPrint/>}
          <div className={`text-center relative  ${spin && `animate-spin`}`}>
            {type == `sonic` && <img className='ml-auto mr-auto' src='/sanichead.png'></img> }
            <div className={`flex justify-center align-middle`}>
              {type == `sonic` && <img className='invisible md:visible absolute md:relative' src='/sanicleft.png'></img> }
            <div
              className={`${theme.cardBackground} text-left px-4 py-4 md:px-12 md:py-6 rounded-3xl border-4 border-black shadow-2xl inline-block relative z-10 md:mt-0`}>
              <Routes>
                {links.map((link, i) => (
                  <Route key={i} element={<div className='flex justify-center align-middle text-sm md:text-xl flex-col'>

                    <h1 className='tracking-wider text-left text-3xl pb-4 font-bold'>{link.heading || link.title}</h1>
                    <link.component />

                  </div>
                  } path={link.path}/>
                ))}
                <Route element = {
                  <div className='flex justify-center align-middle text-sm md:text-xl flex-col'>
                    <h1 className='tracking-wider text-left text-3xl pb-4 font-bold'>Secret Page</h1>
                    <SecretPage setTheme={setTheme}/>
                  </div>
                  } path='/i_love_sonic'>

                </Route>
              </Routes>
            </div>
              { type == `sonic` && <img className='invisible md:visible absolute md:relative' src='/sanicright.png'></img> }
            </div>
            {type == `sonic` && <img className='ml-auto mr-auto' src='/saniclegs.png'></img> }
          </div>

          <div className={`text-center my-2 z-20 ${spin && `fixed top-1/2 left-1/2 transform translate-x-[-50%]`}`}>
            <button onClick={() => spin ? setDoubleSpin(true) : setSpin(true)}
                    className={` ${!doubleSpin && `hover:bg-green-300`} relative p-3 bg-green-400 rounded-xl font-bold border-black border-2 ${spin && `font-extrabold tracking-wider`} ${doubleSpin && `cursor-default`}`}>{doubleSpin ? `=ygU5M"{8D9*&|p3@@42l]4!cH:kfES+&"z$` : spin ? <>THIS
              CANNOT BE UNDONE<br/><span
                className='text-xs text-gray-600'>(May cause even more motion sickness)</span></> : <>Make it spin!<br/><span
              className='text-xs text-gray-600'>(May cause motion sickness)</span></>}</button>
          </div>
        </BrowserRouter>


      </div>
    )
}

export default WrappedContext;
