import HomePage from '../../../views/HomePage';
import { Api } from '../../../services/apiServices';

const api = new Api();

console.log(`api`, api);

// api.fetchTrending();

const Main = () => {
  return (
    <main>
      <HomePage />
    </main>
  );
};

export default Main;
