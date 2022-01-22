export const navRoutes = {
  home: {
    id: 1,
    title: 'Home',
    path: 'home',
    absolutePath: '/home',
  },
  movies: {
    id: 2,
    title: 'Movies',
    path: 'movies',
    absolutePath: '/movies',
  },
};

export const movieAddInfoRoutes = {
  cast: {
    id: 1,
    title: 'Cast',
    path: 'cast',
    absolutePath: '/cast',
  },
  reviews: {
    id: 2,
    title: 'Review',
    path: 'reviews',
    absolutePath: '/reviews',
  },
};

export const dinamic = {
  id: {
    title: 'movieId',
    path: ':movieId',
  },
};
