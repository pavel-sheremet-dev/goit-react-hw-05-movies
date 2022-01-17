import styled from 'styled-components';

export const CastStyled = styled.div`
  padding: 20px;

  & .actor {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  & .actor-img {
    align-self: flex-start;
    width: 50px;
  }
`;
