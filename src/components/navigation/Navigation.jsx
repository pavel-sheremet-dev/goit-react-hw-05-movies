import { NavLink } from 'react-router-dom';

const Navigation = ({ navData }) => {
  return (
    <nav>
      <ul>
        {navData.map(({ id, title, path }) => (
          <li key={id}>
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
