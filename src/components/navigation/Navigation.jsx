const Navigation = ({ navData }) => {
  return (
    <nav>
      <ul>
        {navData.map(({ id, title }) => (
          <li key={id}>
            <a href="#/">{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
