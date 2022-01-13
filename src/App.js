import { GlobalStyle } from './styles/GlobalStyles';
// import { Router, Route, NavLink } from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/header/main/Main';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
};

export default App;
