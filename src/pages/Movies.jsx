import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchFilms } from '../components/services/API';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const [searhGallery, setSearchGallery] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function handleFetchSearchFilms() {
      try {
        setError(null);
        if (!movieName) {
          return;
        }

        const searchFilm = await fetchSearchFilms(movieName);
        setError(null);
        console.log(searchFilm);
        if (searchFilm.results.length === 0) {
          setError('Nothing found 😒. Please enter another value ');
        }
        console.log(movieName);
        setSearchGallery(searchFilm.results);

        console.log(searchFilm);
      } catch {
        setError('Error 😒. Please reload page 👍');
      } finally {
      }
    }
    handleFetchSearchFilms(movieName);
  }, [movieName]);

  console.log(searhGallery);

  return (
    <main>
      <SearchBox />
      {error && <p>{error}</p>}
      <ul>
        {movieName &&
          searhGallery &&
          searhGallery.map(item => (
            <li key={item.id}>
              <a href="1">{item.title}</a>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Movies;
