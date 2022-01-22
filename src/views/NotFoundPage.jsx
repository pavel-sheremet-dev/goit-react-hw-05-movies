import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import RedirectTimer from '../components/redirectTimer/RedirectTimer';
import Section from '../components/section/Section';
import { navRoutes } from '../routes/routes';

const NotFoundPage = () => {
  const [timeToRedirect, setTimeToRedirect] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navRoutes.home.path, { replace: true });
  };

  useEffect(() => {
    if (!timeToRedirect) return;
    navigate(navRoutes.home.path, { replace: true });
  }, [navigate, timeToRedirect]);

  return (
    <Section title="PAGE NOT FOUND (404)" titleLevel="h2">
      <Button
        onClick={handleClick}
        p={10}
        mb={10}
      >{`Back to ${navRoutes.home.title}`}</Button>
      <p className="paragraph">The requested page was not found</p>
      <RedirectTimer getRedirect={setTimeToRedirect} />
    </Section>
  );
};

export default NotFoundPage;
