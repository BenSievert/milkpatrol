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
      rounded: `rounded-3xl`
    },
    home: {
      bandType: `Dairy Based`
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
    }

  }
}
export const ThemeContext = createContext(themes.milk);