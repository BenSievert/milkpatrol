function Schedule() {
  document.title = `Milk Patrol-Schedule`
  return (
    <div>
      <div className='text-2xl mb-24'>
        Upcoming: <span className='text-base'>None :( Please book us</span>
      </div>
      <div>
        <div className='text-2xl mb-4'>  Previous:</div>

        <div className='rounded-2xl p-2 md:p-6 bg-violet-100 inline-block border-2 border-violet-600 shadow-2xl'>
        <div className='mb-3 text-xl'>
          <span className='font-bold'>Where:</span> The Coffeehouse in Normal
          <br></br>
          <span className='font-bold'>When:</span> February 23rd, 2024
        </div>
          <div className='flex justify-center align-middle'>
          <a className='border-2 border-black rounded' href="https://imgur.com/JvLoMud"><img width='200px' alt='no image :(' src="https://i.imgur.com/JvLoMud.png" title="source: imgur.com" /></a></div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
