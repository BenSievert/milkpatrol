import Card from "../components/Card.tsx";
import {ThemeContext} from "../context/theme.tsx";
import {useContext} from "react";

function About() {
  const theme =  useContext(ThemeContext).about;

  document.title = `Milk Patrol-About`
  return (
    <div>
      <div className='mb-4'>
        <div>We are just some cool dudes who like to make music. The only thing stronger than our love for music is our bond of friendship</div>
        <Card>
          <div className={`mb-4 border-b border-violet-700 text-2xl`}>Current Lineup</div>
          {theme.bandMembers.map(({bandMate, roles}) => <div className='mt-2'>
            <span className={`font-bold ${theme.role}`}>{bandMate}:</span> <div className={`border-b ${theme.border} inline-block`}><div className={`${theme.bandMember} inline-block`}>{roles}</div></div>
          </div>)}
        </Card>

      </div>
      <div>
        If you'd like to <span className='font-bold'>book</span> us, you can message us on Discord, Instagram, or email{` `}
        <a className='underline text-violet-700' href = "mailto: sievertbenjamin@gmail.com">sievertbenjamin@gmail.com</a>

      </div>

    </div>
  );
}

export default About;