import { createContext } from 'react';

export const themes = {
  milk: {
    type: `milk`,
    navBar: {
      navBar: `bg-gradient-to-tl from-violet-600 to-pink-600`,
      linkHover: `hover:bg-pink-400`,
      link: `bg-pink-400 text-violet-900`,

    },
    main: {
      cardBackground: `bg-pink-100`,
      background: `bg-violet-300`,
      rounded: `rounded-3xl`,
      fill: `fill-pink-600`
    },
    home: {
      bandType: `Dairy Based`
    },
    card: {
      background: `bg-violet-100`,
      border: `border-violet-700`
    },
    faq: {
      border: `border-violet-700`
    },
    about: {
      border: `border-violet-700`,
      bandMember: `text-green-900`,
      role: `text-violet-900`,
      bandMembers:  [
        { bandMate: `Ben Sievert`, roles: `Guitar, Bass, Keys, Vocals` },
        { bandMate: `Josh Dahmm`, roles: `Vocals, Keys, Guitar` },
        { bandMate: <>Tommy <span className='italic'>"The Albatross"</span> Harris</>, roles: `Bass, Violin, Guitar, Vocals`},
        { bandMate: `Jake Ewen`, roles: `Guitar`},
        { bandMate: `Braydon Hughes`, roles: `Percussion`}
      ]
    }
  },
  sonic: {
    type: `sonic`,
    navBar: {
      navBar: `bg-blue-600`,
      linkHover: `hover:bg-blue-200`,
      link: `bg-blue-200 text-blue-900`,
      cardBackground: `bg-brown-100`
    },
    main: {
      cardBackground: `bg-amber-100`,
      background: `bg-blue-500`,
      border: `border-white`,
      rounded: `rounded-xl`
    },
    home: {
      bandType: `Fastest`
    },
    card: {
      background: `bg-yellow-200`,
      border: `border-red-700`
    },
    faq: {
      border: `border-red-700`
    },
    about: {
      border: `border-red-700`,
      bandMember: `text-red-700`,
      role: `text-blue-700`,
      bandMembers: [
        { bandMate: `Sonic the Hedgehog`, roles: `Speedster` },
        { bandMate: `Knuckles the Echidna`, roles: `Bat Lover` },
        { bandMate: <>Shadow <span className='italic'>"All of Me"</span> the Hedgehog</>, roles: `Edgelord`},
        { bandMate:  <>Miles <span className='italic'>"Tails"</span> Prower</>, roles: `Sidekick`}]
    }

  },
  dairy: {
    type: `dairy`,
    navBar: {
      navBar: `bg-yellow-800`,
      linkHover: `hover:bg-yellow-700`,
      link: `bg-yellow-700 text-white`,

    },
    main: {
      cardBackground: `bg-white`,
      background: `bg-white`,
      rounded: `rounded-3xl`,
      fill: `fill-black`
    },
    home: {
      bandType: `Dairy Based`
    },
    card: {
      background: `bg-white`,
      border: `border-black`
    },
    faq: {
      border: `border-black`
    },
    about: {
      border: `border-black`,
      bandMember: `text-black`,
      role: `text-black`,
      bandMembers: [
        { bandMate: `Ben Sievert`, roles: `Guitar, Bass, Keys, Vocals` },
        { bandMate: `Josh Dahmm`, roles: `Vocals, Keys, Guitar` },
        { bandMate: <>Tommy <span className='italic'>"The Albatross"</span> Harris</>, roles: `Bass, Violin, Guitar, Vocals`},
        { bandMate: `Jake Ewen`, roles: `Guitar`},
        { bandMate: `Braydon Hughes`, roles: `Percussion`}
      ]

    }
  },
}
export const ThemeContext = createContext(themes.milk);