import { useHistory } from 'react-router-dom';
import Button from '../components/button/Button';
import Section from '../components/section/Section';
import { navRoutes } from '../routes/routes';

const NotFoundPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.replace(navRoutes.home.path);
  };

  return (
    <Section title="PAGE NOT FOUND (404)" titleLevel="h2">
      <Button
        onClick={handleClick}
        p={10}
        mb={10}
      >{`Back to ${navRoutes.home.title}`}</Button>
      <p className="paragraph">The requested page was not found</p>
    </Section>
  );
};

export default NotFoundPage;
