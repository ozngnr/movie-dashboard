import Carousel from '@/components/Carousel';
import { getDate } from '@/lib/helpers';
import { getUpcomingMovies } from '@/services/movieService';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

export default async function UpcomingMovies() {
  const { results: movies } = await getUpcomingMovies();

  return (
    <div>
      <div className="flex-between">
        <h3>Upcoming</h3>
        <Link href={'/#'} className=" pt-1">
          See all{' '}
          <ChevronRightIcon
            width={16}
            height={16}
            style={{ display: 'inline-block' }}
          />
        </Link>
      </div>

      <div>
        <Carousel>
          {movies.map((movie: any) => (
            <div key={movie.id}>
              <div className="relative m-2 rounded-lg overflow-hidden [&:hover>div]:translate-y-0">
                <div className="absolute inset-x-0 bottom-0 translate-y-[100%] bg-gradient-to-b from-transparent to-black pt-12 px-2 pb-3 transition-all">
                  <h4 className="">{movie.title}</h4>
                  <p>{getDate(movie.release_date)}</p>
                </div>
                <a
                  href="#"
                  className="before:content-[''] before:absolute before:inset-0"
                  draggable="false"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={`${movie.title} poster`}
                    sizes="500px"
                    width={500}
                    height={281}
                  />
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
