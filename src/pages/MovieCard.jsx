import { fetchFilmsCard } from 'components/services/API';
import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

const MovieCard = () => {
  const { movieId } = useParams({});
  const [film, setFilm] = useState();
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state.from ?? '/';

  // console.log('card');
  // console.log(movieId);
  useEffect(() => {
    async function handleFetchFilmCard() {
      try {
        // console.log('card11');
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
  // console.log(film);
  const { poster_path, original_title, overview, genres, vote_average } = film;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://www.pngall.com/wp-content/uploads/7/Gallery-PNG-Free-Download.png';

  const voteAverage = vote_average * 10;
  const genresFilm = genres.map(genre => genre.name).join(' ');
  return (
    film && (
      <main>
        {/* <button>Go back</button> */}
        <Link to={backLinkHref}>Go Back</Link>
        <img src={poster} alt="11" width="240"></img>
        <h1>{original_title}</h1>
        <p>User Score: {voteAverage}%</p>
        <h3>Overviev</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p> {genresFilm}</p>

        <h2>Adittional international</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </main>
    )
  );
};

export default MovieCard;
