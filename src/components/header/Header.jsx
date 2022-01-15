import { navRoutes } from '../../routes/routes';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <header>
      <Navigation navRoutes={navRoutes} />
    </header>
  );
};

export default Header;
