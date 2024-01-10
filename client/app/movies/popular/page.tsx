import { getDate } from '@/lib/helpers';
import { getPopularMovies } from '@/services/movieService';
import Image from 'next/image';

export default async function Page() {
  const { results: movies } = await getPopularMovies();

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie: any) => (
        <div
          key={movie.id}
          className="relative m-2 rounded-lg overflow-hidden [&:hover>div]:translate-y-0"
        >
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
      ))}
    </div>
  );
}
