import { GlobalStyle } from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <ToastContainer />
    </>
  );
};

export default App;
