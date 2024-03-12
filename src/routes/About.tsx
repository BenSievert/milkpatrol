function About() {
  document.title = `Milk Patrol-About`
  const us = [
    { bandMate: `Ben Sievert`, roles: `Website Admin` },
    { bandMate: `Josh Dahmm`, roles: `Hype Man` },
    { bandMate: <>Tommy <span className='italic'>"The Albatross"</span> Harris</>, roles: `Albatross`},
    { bandMate: `Jake Ewen`, roles: `Intercontinental Philosopher`},
    { bandMate: `Braydon Hughes`, roles: `Plant Milk Ambassador`}
  ]
  return (
    <div>
      <div className='mb-4'>
        <div>We are just some cool dudes who like to make music. The only thing stronger than our love for music is our bond of friendship</div>
        <div className='mt-4 border-2 inline-block border-violet-700 rounded-xl bg-violet-100 p-4'>
          <div className='mb-4 border-b border-violet-700 text-2xl'>Current Lineup</div>
          {us.map(({bandMate, roles}) => <div className='mt-2'>
            <span className='font-bold text-violet-900'>{bandMate}:</span> <div className=' border-b border-violet-700 inline-block'><div className='text-green-900 inline-block'>{roles}</div></div>
          </div>)}
        </div>

      </div>
      <div>
        If you'd like to <span className='font-bold'>book</span> us, you can message us on Discord, Instagram or email{` `}
        <a className='underline text-violet-700' href = "mailto: sievertbenjamin@gmail.com">sievertbenjamin@gmail.com</a>

      </div>

    </div>
  );
}

export default About;