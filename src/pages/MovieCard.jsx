import { fetchFilmsCard } from 'components/services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieCard = () => {
  const { movieId } = useParams({});
  const [film, setFilm] = useState();
  const [error, setError] = useState(null);

  console.log('card');
  console.log(movieId);
  useEffect(() => {
    async function handleFetchFilmCard() {
      try {
        console.log('card11');
        const filmCard = await fetchFilmsCard(movieId);
        setError(null);
        setFilm(filmCard);
      } catch {
        setError('Error 😒. Please reload page 👍');
      } finally {
      }
    }
    handleFetchFilmCard(Number(movieId));
  }, [movieId]);
  if (!film) {
    return;
  }
  console.log(error);
  console.log(film);
  const { poster_path, original_title, overview, genres, vote_average } = film;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://www.pngall.com/wp-content/uploads/7/Gallery-PNG-Free-Download.png';

  const voteAverage = vote_average * 10;
  const genresFilm = genres.map(genre => genre.name).join(' ');
  return (
    film && (
      <main>
        <button>Go back</button>
        <img src={poster} alt="11" width="240"></img>
        <h1>{original_title}</h1>
        <p>User Score: {voteAverage}%</p>
        <h2>Overviev</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p> {genresFilm}</p>
      </main>
    )
  );
};

export default MovieCard;
