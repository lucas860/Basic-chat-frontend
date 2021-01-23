import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  form {
    background: none;
    display: flex;
    flex-direction: column;

    width: 320px;
    padding: 15px;

    text-align: center;
    border-radius: 4px;

    h1 {
      margin-bottom: 10px;
    }

    button {
      background: #fff;
      transition: background-color 0.2s;

      width: 100%;
      height: 40px;

      margin-bottom: 10px;

      border: none;
      border-radius: 4px;

      &:hover {
        background: ${shade(0.05, '#fff')};
      }
    }
  }
`;
