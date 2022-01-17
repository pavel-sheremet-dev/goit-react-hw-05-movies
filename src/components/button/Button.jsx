import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({
  type = 'button',
  onClick = null,
  icon = null,
  children,
  mt = 0,
  mr = 0,
  mb = 0,
  ml = 0,
  pt = 0,
  pr = 0,
  pb = 0,
  pl = 0,
  p = 0,
  m = 0,
}) => {
  return (
    <StyledButton
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
      m={m}
      p={p}
      type={type}
      onClick={onClick}
    >
      {icon}
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.element,
  mt: PropTypes.number,
  mr: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  pt: PropTypes.number,
  pr: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  m: PropTypes.number,
  p: PropTypes.number,
  type: PropTypes.string,
};

export default Button;
