import { GlobalStyle } from './styles/GlobalStyles';
import { navData } from './data/Data';
import Navigation from './components/navigation/Navigation';
import HomePage from './views/HomePage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <header>
        <Navigation navData={navData} />
      </header>
      <main>
        <HomePage />
      </main>
    </>
  );
};

export default App;
