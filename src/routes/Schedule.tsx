import Card from "../components/Card.tsx";

function Schedule() {
  document.title = `Milk Patrol-Schedule`
  return (
    <div>
      <div className='text-2xl mb-4'>
        Upcoming:
      </div>
      <Card>
        <div className='mb-3 text-xl'>
          <span className='font-bold'>Where:</span> The Bone Student Center
          <br></br>
          <span className='font-bold'>When:</span> 7pm, April 17th, 2024
        </div>
        <div className='flex justify-center align-middle'>
          <a className='border-2 border-black rounded' href="https://www.instagram.com/p/C5ghuJthe1u/"><img width='200px' alt='no image :(' src="https://i.imgur.com/7hZnFZ7.png" title="source: imgur.com" /></a></div>
      </Card>
      <div>
        <div className='text-2xl mb-4'>  Previous:</div>

        <Card>
        <div className='mb-3 text-xl'>
          <span className='font-bold'>Where:</span> The Coffeehouse in Normal
          <br></br>
          <span className='font-bold'>When:</span> February 23rd, 2024
        </div>
          <div className='flex justify-center align-middle'>
          <a className='border-2 border-black rounded' href="https://imgur.com/JvLoMud"><img width='200px' alt='no image :(' src="https://i.imgur.com/JvLoMud.png" title="source: imgur.com" /></a></div>
        </Card>
      </div>
    </div>
  );
}

export default Schedule;
