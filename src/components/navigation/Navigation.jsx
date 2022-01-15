import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './Navigation.styled';

const Navigation = ({ navRoutes }) => {
  return (
    <NavigationStyled>
      <ul>
        {navRoutes.map(({ id, title, path }) => (
          <li key={id}>
            <NavLink
              className="nav-item"
              activeClassName="nav-item-active"
              to={path}
              exact
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
