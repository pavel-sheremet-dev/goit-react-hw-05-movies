import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './Navigation.styled';

const Navigation = ({ navRoutes }) => {
  return (
    <NavigationStyled>
      <ul className="nav-list">
        {Object.keys(navRoutes).map(key => {
          const { id, title, path } = navRoutes[key];
          return (
            <li key={id} className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
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

Navigation.propTypes = {
  navRoutes: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
};

export default Navigation;
