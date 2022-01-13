import PropTypes from 'prop-types';
import { StyledSection, Title } from './Section.styled';

const Section = ({ title, children, titleLevel, isHidden = false }) => {
  return (
    <StyledSection>
      {title && (
        <Title as={titleLevel} isHidden={isHidden}>
          {title}
        </Title>
      )}

      {children}
    </StyledSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  titleLevel: PropTypes.string.isRequired,
  isHidden: PropTypes.bool,
};
