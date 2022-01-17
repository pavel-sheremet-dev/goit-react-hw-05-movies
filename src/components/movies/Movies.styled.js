import styled from 'styled-components';

export const MoviesList = styled.ul`
  margin-bottom: 20px;

  & .movies-item:not(:last-child) {
    margin-bottom: 5px;
  }

  & .movies-link:hover,
  .movies-link:focus {
    color: blue;
    transition: color 150ms linear;
  }
`;
