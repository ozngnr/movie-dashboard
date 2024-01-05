import PopularMovies from './movies/PopularMovies';
import UpcomingMovies from './movies/UpcomingMovies';

export default function Home() {
  return (
    <div className="min-h-screen px-5 py-3">
      <PopularMovies />
      <UpcomingMovies />
    </div>
  );
}
