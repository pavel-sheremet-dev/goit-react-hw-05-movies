import Movies from '../components/section/movies/Movies';
import Section from '../components/section/Section';

const moviesData = [
  {
    id: 1,
    name: 'Movie name 1',
  },
  {
    id: 2,
    name: 'Movie name 2',
  },
  {
    id: 3,
    name: 'Movie name 3',
  },
];

const HomePage = () => {
  return (
    <>
      <Section titleLevel="h3" title="Популярные фильмы">
        <Movies moviesData={moviesData} />
      </Section>
    </>
  );
};

export default HomePage;
