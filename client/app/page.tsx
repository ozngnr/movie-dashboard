import { Suspense } from 'react';
import PopularMovies from './movies/PopularMovies';
import UpcomingMovies from './movies/UpcomingMovies';

export default function Home() {
  return (
    <div className="min-h-screen px-5 py-3">
      <Suspense fallback={<h1>hello</h1>}>
        <PopularMovies />
      </Suspense>
      <Suspense fallback={<h1>hello</h1>}>
        <UpcomingMovies />
      </Suspense>
    </div>
  );
}
