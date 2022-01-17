import styled from 'styled-components';

export const MovieCardStyled = styled.div`
  & .head {
    margin-bottom: 20px;
    @media screen and (min-width: 480px) {
      display: flex;
    }
  }

  & .title {
    margin-bottom: 10px;
  }
  & .image {
    width: 100%;
    height: calc((100vw - 30px) * 1.5);
    align-self: flex-start;
    object-fit: cover;
    margin-bottom: 20px;
    @media screen and (min-width: 480px) {
      width: 200px;
      height: auto;
      margin-bottom: 0;
      margin-right: 10px;
    }
  }

  & .nav-list {
    display: inline-flex;
  }

  & .nav-item:not(:last-child) {
    margin-right: 20px;
  }

  & .nav-link {
    padding: 20px 0;
    font-weight: 700;
    transition: color 250ms linear;

    &:hover,
    &:focus {
      color: green;
    }
  }

  & .nav-link-active {
    color: green;
  }
`;
