import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
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
      <ul>
        {gallery.map(item => (
          <li key={item.id}>
            <a href="1">{item.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
