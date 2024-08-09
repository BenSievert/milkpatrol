
import { useContext } from "react";
import { ThemeContext } from "../context/theme.tsx";

function Card({children} : any) {
  const context =  useContext(ThemeContext).card;

  return (
    <div className={`w-full rounded-2xl p-2 md:p-6 ${context.background} ${context.border} inline-block border-2  shadow-2xl`}>
      {children}
    </div>
  )
}

export default Card;