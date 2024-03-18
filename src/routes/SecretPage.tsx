import { themes} from "../context/theme.ts";

function SecretPage({setTheme}: any) {
  document.title = `Secret Page`
  return (
    <div className={`text-center`}>
      Congrats on finding the secret page!
      Click this button to make the site sonic the hedge hog themed!
      <br></br>
      <button onClick={() => setTheme(themes.sonic)} className='mt-2 rounded-xl bg-blue-500 p-2 text-white border-2 border-black hover:bg-blue-400'>Gotta Go Fast!</button>
    </div>
  );
}

export default SecretPage;
