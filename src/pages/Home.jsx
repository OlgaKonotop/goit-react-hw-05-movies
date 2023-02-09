import HomeList from 'components/HomeList/HomeList';
import { useState, useEffect } from 'react';

import { fetchPopularyFilms } from '../components/services/API';

const Home = () => {
  console.log('home');
  const [gallery, setGallery] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log('home2');
    async function handlefetchGallery() {
      try {
        const galleryFilm = await fetchPopularyFilms();
        setGallery(galleryFilm.results);
      } catch {
        setError('Error 😒. Please reload page 👍');
      } finally {
      }
    }
    handlefetchGallery();
  }, []);
  if (!gallery) {
    return;
  }
  console.log(gallery);
  console.log(error);
  return (
    <main>
      <h1>Trending today</h1>
      <ul></ul>
      <HomeList gallery={gallery} />
      {/* <FilmCard /> */}
    </main>
  );
};

export default Home;
