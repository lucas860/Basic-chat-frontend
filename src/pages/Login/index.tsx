import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import { Container } from './styles';

interface LoginData {
  username: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleLogin = useCallback(
    (data: LoginData) => {
      history.push(`/dashboard?username=${data.username}`);
    },
    [history],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleLogin}>
        <h1>Login</h1>

        <Input name="username" type="text" />

        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
