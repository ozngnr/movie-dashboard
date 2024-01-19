import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getMoviesWithGenres } from '@/services/movieService';
import { ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function UpcomingMovies() {
  const movies = await getMoviesWithGenres('upcoming', 1);

  return (
    <div className="mb-5">
      <div className="flex-between mb-3">
        <h3>Upcoming</h3>
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
          }}
        >
          <CarouselContent>
            {movies.slice(0, 10).map((movie: any) => (
              <CarouselItem
                key={movie.id}
                className={`max-w-[70%] md:max-w-[60%]`}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <div className="absolute flex-between inset-x-0 bottom-0 bg-opacity-60 bg-gradient-to-b from-transparent to-black p-4 pt-10 uppercase ">
                    <div>
                      <h1 className="font-bold">{movie.title}</h1>
                      <p>{movie.genres.join(', ')}</p>
                    </div>
                    <p className="flex w-max font-medium text-lightPrimary bg-darkSecondary bg-opacity-50 p-2 rounded-lg">
                      {movie.vote_average.toFixed(1)}
                      <span className="ml-1">
                        <Star fill="gold" strokeWidth={0} size={20} />
                      </span>
                    </p>
                  </div>
                  <a
                    href="#"
                    className="before:content-[''] before:absolute before:inset-0"
                    draggable="false"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt={`${movie.title} poster`}
                      width={500}
                      height={281}
                      className="w-full"
                      priority={true}
                    />
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
}
