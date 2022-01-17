import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './Navigation.styled';

const Navigation = ({ navRoutes }) => {
  return (
    <NavigationStyled>
      <ul>
        {Object.keys(navRoutes).map(key => {
          const { id, title, path } = navRoutes[key];
          return (
            <li key={id}>
              <NavLink
                className="nav-item"
                activeClassName="nav-item-active"
                // to={path}
                to={{
                  pathname: path,
                  state: {
                    moviesPath: navRoutes.movies.path,
                  },
                }}
              >
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
