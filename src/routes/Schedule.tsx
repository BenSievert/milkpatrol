function Schedule() {
  return (
    <div>
      <div className='text-3xl mb-24'>
        Upcoming: <span className='text-base'>None :( Please book us</span>
      </div>
      <div>
        <div className='text-3xl mb-4'>  Previous:</div>

        <div className='rounded-2xl p-6 bg-pink-100 inline-block border border-2 border-pink-200 shadow-2xl'>
        <div className='mb-3 text-xl'>
          <span className='font-bold'>Where:</span> The Coffeehouse in Normal
          <br></br>
          <span className='font-bold'>When:</span> February 23rd, 2024
        </div>
          <div className='flex justify-center align-middle'>
          <a href="https://imgur.com/JvLoMud"><img width='200px' alt='no image :(' src="https://i.imgur.com/JvLoMud.png" title="source: imgur.com" /></a></div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
