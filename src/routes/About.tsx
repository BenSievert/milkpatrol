import Card from "../components/Card.tsx";
import {ThemeContext} from "../context/theme.tsx";
import {useContext} from "react";

function About() {
  const theme =  useContext(ThemeContext).about;

  document.title = `Milk Patrol-About`
  return (
    <div>
      <div className='mb-4'>
        <div className='mb-4'>We are a dairy-themed band based out of Bloomington-Normal. We perform a mixture of covers and original songs in a variety of genres. <br />(all our members have different tastes and we need to keep everyone happy.)</div>
        <Card>
          <div className={`mb-4 border-b border-violet-700 text-2xl`}>Members</div>
          {theme.bandMembers.map(({bandMate, roles}) => <div className='mt-2'>
            <span className={`font-bold ${theme.role}`}>{bandMate}:</span> <div className={`border-b ${theme.border} inline-block`}><div className={`${theme.bandMember} inline-block`}>{roles}</div></div>
          </div>)}
        </Card>

      </div>
      <div>
        If you'd like to book us, you can message us on Discord, Instagram, or email{` `}
        <a className='underline text-violet-700' href = "mailto: sievertbenjamin@gmail.com">sievertbenjamin@gmail.com</a>

      </div>

    </div>
  );
}

export default About;