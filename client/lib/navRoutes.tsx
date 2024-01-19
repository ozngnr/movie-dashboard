import { AlarmClock, Compass, Home, LucideProps, Video } from 'lucide-react';

const iconProps: LucideProps = {
  strokeWidth: 1.5,
};

export const navRoutes = [
  {
    name: 'Menu',
    items: [
      {
        name: 'Home',
        href: '/',
        icon: <Home {...iconProps} />,
      },
      {
        name: 'Discover',
        href: '/favourites',
        icon: <Compass {...iconProps} />,
      },
      {
        name: 'Now Playing',
        href: '/now-playing',
        icon: <Video {...iconProps} />,
      },
      {
        name: 'Coming Soon',
        href: '/coming-soon',
        icon: <AlarmClock {...iconProps} />,
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
