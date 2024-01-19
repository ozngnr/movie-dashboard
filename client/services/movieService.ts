const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_KEY}`,
  },
};

export async function getGenres() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/genre/movie/list`,
    options
  );
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export async function getMovies(path: string, page: number = 1) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${path}?page=${page}&region=gb`,
    options
  );
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export async function getMoviesWithGenres(path: string, page: number) {
  const moviesData = getMovies(path, page);
  const genresData = getGenres();
  const [{ results: movies }, { genres }] = await Promise.all([
    moviesData,
    genresData,
  ]);

  const moviesWithGenres = movies.map((movie: any) => {
    const movieGenres = movie.genre_ids.map((genreId: number) => {
      const genre = genres.find((genre: any) => genre.id === genreId);
      return genre ? genre.name : '';
    });
    return {
      ...movie,
      genres: movieGenres,
    };
  });
  moviesWithGenres.map((m: any) => delete m.genre_ids);
  return moviesWithGenres;
}
