import styled from 'styled-components';

export const BoxStyled = styled.div`
  display: ${({ display }) => display};
  margin: ${({ mt, ml, mb, mr, m }) =>
    m ? `${m}px` : `${mt}px ${mr}px ${mb}px ${ml}px`};
  padding: ${({ pt, pl, pb, pr, p }) =>
    p ? `${p}px` : `${pt}px ${pr}px ${pb}px ${pl}px`};
`;
