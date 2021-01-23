import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    background: #fff;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 280px;
    height: 50px;

    border-radius: 4px;
    text-decoration: none;
    color: #111;

    &:hover {
      background: ${shade(0.05, '#fff')};
    }
  }
`;
