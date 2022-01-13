import { navData } from '../../data/Data';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <header>
      <Navigation navData={navData} />
    </header>
  );
};

export default Header;
