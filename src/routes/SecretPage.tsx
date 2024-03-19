import { themes} from "../context/theme.ts";
import { ThemeContext } from "../context/theme"
import {useContext} from "react";


function SecretPage({setTheme}: any) {
  const theme = useContext(ThemeContext)?.type;

  document.title = `Secret Page`
  return (
    <div className={`text-left`}>
      Congrats on finding the secret page!
      Click this button to make the site <span className='italic'>Sonic the Hedgehog themed</span>!
      <br></br>
      <div className='text-center'>
        <button onClick={() => setTheme(themes.sonic)} className={`mt-2 rounded-xl bg-blue-500 p-2 text-white border-2 border-black ${theme == `sonic` ?  `cursor-default bg-blue-600` : `hover:bg-blue-400`}`}>{theme == `sonic` ?  `You're too slow!` : `Gotta Go Fast!`}</button>
      </div>
    </div>

  );
}

export default SecretPage;
