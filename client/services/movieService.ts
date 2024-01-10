const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_KEY}`,
  },
};

export async function getPopularMovies() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/movie/popular`,
    options
  );

  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export async function getUpcomingMovies() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/movie/upcoming?region=gb`,
    options
  );
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}
