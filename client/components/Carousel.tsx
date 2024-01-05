'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Slider from 'react-slick';

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <CustomArrow variant="next" />,
  prevArrow: <CustomArrow variant="prev" />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};
function CustomArrow(props: any) {
  const { variant, onClick } = props;

  return (
    <div
      className={
        'absolute flex top-0 bottom-0 py-10 px-1 z-[1000] bg-darkSecondary bg-opacity-0 hover:bg-opacity-60 [&:hover>svg]:opacity-100 cursor-pointer'
      }
      onClick={onClick}
      style={variant === 'next' ? { right: 0 } : { left: 0 }}
    >
      {variant === 'next' ? (
        <ChevronRightIcon width={30} fill="white" className="opacity-0" />
      ) : (
        <ChevronLeftIcon width={30} fill="white" className="opacity-0" />
      )}
    </div>
  );
}

const Carousel = ({ children }: { children: React.ReactNode }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
