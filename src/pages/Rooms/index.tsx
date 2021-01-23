import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import queryString from 'query-string';

import Input from '../../components/Input';

import { Container } from './styles';

interface LoginData {
  room: string;
}

const Rooms: React.FC<RouteComponentProps> = ({ location }) => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const { username } = queryString.parse(location.search);

  const handleLogin = useCallback(
    (data: LoginData) => {
      history.push(`/lobbychat?username=${username}&room=${data.room}`);
    },
    [history, username],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleLogin}>
        <h1>Entrar na sala</h1>

        <Input name="room" type="text" placeholder="room" />

        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default Rooms;
