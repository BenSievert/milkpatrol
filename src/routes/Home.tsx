function Home() {
  return (
    <div className="text-center ">
      <h1 className="text-4xl font-bold ">Milk Patrol</h1>
      <div className='flex justify-center items-center mt-2 mb-4'>
        <figure>
          <img width='400px' src="https://i.imgur.com/KlrVZiy.png" title="source: imgur.com"  alt=':( image didnt load'/>
          <figcaption className='text-left text-xs'>Photo Credit <a className='text-orange-600 underline' href='https://www.instagram.com/ryanmcc_photos/'>Ryan McCauley</a></figcaption>
        </figure>
      </div>
      <h3 className="text-xl mb-12">Central Illinois' Number 1 Dairy Based Band</h3>
      <div className="text-l">
        Form an unhealthy parasocial relationship with us on
        <br></br>
        <div className="my-4 rounded-full bg-blue-700 hover:bg-blue-500 inline-block py-1 px-2">
          <a className="text-white p-1" href="https://discord.gg/2hk7cNrTNR">Discord</a>
        </div>
        <div className="mb-2">Or</div>
        <div className="my-2 text-white hover:text-black rounded-full bg-pink-400 hover:bg-pink-200 inline-block py-1 px-2">
          <a className="p-1" href="https://www.instagram.com/milkpatrolband/">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
