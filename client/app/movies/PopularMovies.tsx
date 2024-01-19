import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getDate } from '@/lib/helpers';
import { getMovies } from '@/services/movieService';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function PopularMovies() {
  const { results: movies } = await getMovies('popular', 1);

  return (
    <div>
      <div className="flex-between">
        <h3>Popular Movies</h3>
        <Link href={'/#'} className=" pt-1">
          See all{' '}
          <ChevronRight
            strokeWidth={1.5}
            size={18}
            style={{ display: 'inline-block' }}
          />
        </Link>
      </div>

      <div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            slidesToScroll: 3,
          }}
        >
          <CarouselContent>
            {movies.slice(0, 9).map((movie: any) => (
              <CarouselItem
                key={movie.id}
                className={`basis-1/3 md:basis-1/4 lg:basis-1/5`}
              >
                <div className="relative rounded-lg overflow-hidden [&:hover>div]:translate-y-0">
                  <div className="absolute inset-x-0 bottom-0 translate-y-[100%] bg-gradient-to-b from-transparent to-black pt-12 px-2 pb-3 transition-all">
                    <h4 className="text-lightPrimary">{movie.title}</h4>
                    <p>{getDate(movie.release_date)}</p>
                  </div>
                  <a
                    href="#"
                    className="before:content-[''] before:absolute before:inset-0"
                    draggable="false"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={`${movie.title} poster`}
                      sizes="500px"
                      width={500}
                      height={750}
                    />
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

const Skeleton = () => {
  return Array(5)
    .fill(0)
    .map((el, i) => <div key={i}></div>);
};
