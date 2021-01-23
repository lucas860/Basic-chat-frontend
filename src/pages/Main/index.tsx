import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import queryString from 'query-string';

import { Container } from './styles';

const Main: React.FC<RouteComponentProps> = ({ location }) => {
  const { username } = queryString.parse(location.search);

  return (
    <Container>
      <Link to={`/rooms?username=${username}`}>Entrar em uma sala</Link>
    </Container>
  );
};

export default Main;
