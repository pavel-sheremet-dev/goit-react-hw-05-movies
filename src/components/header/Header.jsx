import { navRoutes } from '../../routes/routes';
import Container from '../container/Container';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <header>
      <Container>
        <Navigation navRoutes={navRoutes} />
      </Container>
      <hr />
    </header>
  );
};

export default Header;
