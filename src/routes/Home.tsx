function Home() {
  /*
  const photos= [
    {
      url: `https://i.imgur.com/KlrVZiy.png`,
      credit: `Ryan McCauley`,
      creditLink: `https://www.instagram.com/ryanmcc_photos/`
    },
    {
      url: `https://i.imgur.com/SJ3siaf.png`,
      credit: `Ryan McCauley`,
      creditLink: `https://www.instagram.com/ryanmcc_photos/`
    },
    {
      url: `https://i.imgur.com/zX8pizh.png`,
      credit: `Ryan McCauley`,
      creditLink: `https://www.instagram.com/ryanmcc_photos/`
    },
    {
      url: `https://i.imgur.com/O88akf2.png`,
      credit: `Ryan McCauley`,
      creditLink: `https://www.instagram.com/ryanmcc_photos/`
    },
    {
      url: `https://i.imgur.com/ifDW6E9.png`,
      credit: `Ryan McCauley`,
      creditLink: `https://www.instagram.com/ryanmcc_photos/`
    },
    {
      url: `https://i.imgur.com/GYfHWZM.png`,
      credit: `Ryan McCauley`,
      creditLink: `https://www.instagram.com/ryanmcc_photos/`
    },
    {
      url: `../public/milkpatrolicon.png`,
      credit: `Hailey Fetting`,
      creditLink: `https://www.haileynfetting.com/`,
      type: `logo`
    }
  ]
 */
 // const [randNumber] = useState(Math.floor(Math.random() * photos.length))
  const photo = {
    url: `/milkpatrolicon.png`,
    credit: `Hailey Fetting`,
    creditLink: `https://www.haileynfetting.com/`,
    type: `logo`
  }
  document.title = `Milk Patrol`

  return (
    <div className={`text-center`}>
      <div className='flex justify-center items-center mb-6 rounded-xl'>
        <figure>
          <img width='450px' src={photo.url} alt=':( image didnt load'/>
          <figcaption className='text-right text-xs'>Image Credit <a className='text-violet-700 underline' href={photo.creditLink}>{photo.credit}</a></figcaption>
        </figure>
      </div>
      <div className="text-l">
        Form an unhealthy parasocial relationship with us on
        <br></br>
        <div className="my-4 rounded-full bg-blue-700 hover:bg-blue-500 inline-block py-1 px-2 shadow border-2 border-black">
          <a className="text-white p-1" href="https://discord.gg/2hk7cNrTNR">Discord</a>
        </div>
        <div className="mb-2">Or</div>
        <div className="my-2 text-white hover:text-black rounded-full bg-pink-400 hover:bg-pink-300 inline-block py-1 px-2 shadow border-2 border-black">
          <a className="p-1" href="https://www.instagram.com/milkpatrolband/">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
