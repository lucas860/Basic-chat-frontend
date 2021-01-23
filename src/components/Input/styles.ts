import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin-bottom: 10px;
  padding: 10px;

  border: 1px solid #fff;
  border-radius: 4px;

  input {
    background: transparent;
    width: 100%;
    border: none;

    font-size: 1.4em;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }
`;
