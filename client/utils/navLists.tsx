import { GlobeEuropeAfricaIcon } from '@heroicons/react/20/solid';
import { ClockIcon, FilmIcon, HomeIcon } from '@heroicons/react/24/outline';

export const navLists = [
  {
    name: 'Menu',
    items: [
      {
        name: 'Home',
        href: '/',
        icon: <HomeIcon />,
      },
      {
        name: 'Discover',
        href: '/favourites',
        icon: <GlobeEuropeAfricaIcon />,
      },
      {
        name: 'Now Playing',
        href: '/now-playing',
        icon: <FilmIcon />,
      },
      {
        name: 'Coming Soon',
        href: '/coming-soon',
        icon: <ClockIcon />,
      },
    ],
  },
  // {
  //   name: 'Library',
  //   items: [
  //     {
  //       name: 'Home',
  //       href: '/',
  //       icon: <HomeIcon />,
  //     },
  //     {
  //       name: 'Discover',
  //       href: '/discover',
  //       icon: <GlobeEuropeAfricaIcon />,
  //     },
  //     {
  //       name: 'Now Playing',
  //       href: '/now-playing',
  //       icon: <FilmIcon />,
  //     },
  //     {
  //       name: 'Coming Soon',
  //       href: '/coming-soon',
  //       icon: <ClockIcon />,
  //     },
  //   ],
  // },
];
