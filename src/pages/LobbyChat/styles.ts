import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
  }

  .dice-btns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    width: 300px;
    height: 80px;

    margin-bottom: 20px;

    button {
      background: #fff;
      transition: background-color 0.2s;

      border: none;
      border-radius: 4px;

      &:hover {
        background: ${shade(0.05, '#fff')};
      }
    }
  }

  .rolls-container {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    width: 300px;
    height: 200px;

    padding: 15px;

    border: 1px solid #eee;
    border-radius: 4px;

    ul {
      max-height: 100%;
      overflow-y: scroll;
      list-style: none;

      text-align: right;

      li {
        margin-top: 10px;

        &:first-child {
          margin: 0;
        }
      }
    }
  }
`;
