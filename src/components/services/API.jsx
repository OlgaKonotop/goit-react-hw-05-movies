import axios from 'axios';
const API_KEY = 'cd08058c291f007122df115265286adb';
export const fetchPopularyFilms = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data;
};

export const fetchSearchFilms = async (query = 'cat') => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        api_key: API_KEY,
        query: `${query}`,
      },
    }
  );
  return response.data;
};
export const fetchFilmsCard = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

// export const fetchFilms = async query => {
//   const response = await axios.get(
//     'https://api.themoviedb.org/3/search/movie',
//     {
//       params: {
//         api_key: 'cd08058c291f007122df115265286adb',
//         page: 1,
//         language: 'en-US',
//         query: `${query}`,
//       },
//     }
//   );
//   return response.data;
// };
