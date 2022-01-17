import PropTypes from 'prop-types';
import { BoxStyled } from './Box.styled';

const Box = ({
  children,
  mt = 0,
  mr = 0,
  mb = 0,
  ml = 0,
  pt = 0,
  pr = 0,
  pb = 0,
  pl = 0,
  m = 0,
  p = 0,
  display = 'block',
}) => {
  return (
    <BoxStyled
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
      display={display}
    >
      {children}
    </BoxStyled>
  );
};

Box.propTypes = {
  children: PropTypes.node,
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
  display: PropTypes.string,
};

export default Box;
