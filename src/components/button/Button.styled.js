import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: ${({ mt, ml, mb, mr, m }) =>
    `${mt || m}px ${mr || m}px ${mb || m}px ${ml || m}px`};
  padding: ${({ pt, pl, pb, pr, p }) =>
    `${pt || p}px ${pr || p}px ${pb || p}px ${pl || p}px`};
  background-color: #cdcdcd;
  cursor: pointer;
  transition: background-color 200ms linear;

  &:focus,
  &:hover {
    background-color: #bbbbbb;
  }
`;
