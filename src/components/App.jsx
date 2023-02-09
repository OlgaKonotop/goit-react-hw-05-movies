import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieCard = lazy(() => import('../pages/MovieCard'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieCard />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="movies" element={<Movies />}>
//           <Route path="mission" element={<Movies />} />
//           <Route path="team" element={<Movies />} />
//           <Route path="reviews" element={<Movies />} />
//         </Route>
//         {/* <Route path="products" element={<Home />} />
//         <Route path="products/:id" element={<Home />} /> */}
//       </Route>
//     </Routes>
//   );
// };
