import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <container>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </container>
  );
};
