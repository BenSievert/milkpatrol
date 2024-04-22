import Card from "../components/Card.tsx";

function Schedule() {
  document.title = `Milk Patrol-Schedule`
  const previous = [
    {where: `The Bone Student Center`, when: `7pm, April 17th, 2024`, img: `https://i.imgur.com/7hZnFZ7.png`, link: `https://www.instagram.com/p/C5ghuJthe1u/`},
    {where: 'The Coffeehouse in Normal', when: 'February 23rd, 2024', img: 'https://i.imgur.com/JvLoMud.png', link: `https://imgur.com/JvLoMud`},
   ]

  const ScheduleCard = ({where, when, img, link}: {where: string, when: string, img: string, link: string}) =>  <div className='mb-6'><Card>
    <div className='mb-3 text-xl'>
      <span className='font-bold'>Where:</span> {where}
      <br></br>
      <span className='font-bold'>When:</span> {when}
    </div>
    <div className='flex justify-center align-middle'>
      <a className='border-2 border-black rounded' href={link}><img width='200px' alt='no image :(' src={img} title="source: imgur.com" /></a></div>
  </Card>
    </div>
  return (
    <div>
      <div className='text-2xl mb-4'>
        Upcoming: None :( please book us
      </div>
      <div>
        <div className='text-2xl mb-4'>  Previous:</div>
        {previous.map((event, i) => <ScheduleCard key={i} where={event.where} when={event.when} img={event.img} link={event.link} />)}
      </div>
    </div>
  );
}

export default Schedule;
