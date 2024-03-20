import WrappedContext from "./components/WrappedContext.tsx";
import { ThemeContext } from "./context/theme.tsx";
import { useState } from "react";
import {themes} from "./context/theme.tsx";


function App() {
  const [theme, setTheme] = useState(themes.milk);
  return (
    <ThemeContext.Provider value={theme}>
      <WrappedContext setTheme={setTheme}/>
    </ThemeContext.Provider>)
}

export default App;
