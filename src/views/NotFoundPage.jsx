import { useHistory } from 'react-router-dom';
import Section from '../components/section/Section';
import { navRoutes } from '../routes/routes';

const NotFoundPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.replace(navRoutes.home.path);
  };

  return (
    <Section title="NOT FOUND" titleLevel="h2">
      <button type="button" onClick={handleClick}>
        {`Back to ${navRoutes.home.title}`}
      </button>
      <p>The requested page was not found</p>
    </Section>
  );
};

export default NotFoundPage;
