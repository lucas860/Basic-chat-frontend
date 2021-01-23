import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Rooms from '../pages/Rooms';
import LobbyChat from '../pages/LobbyChat';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/dashboard" component={Main} />
    <Route path="/rooms" component={Rooms} />
    <Route path="/lobbychat" component={LobbyChat} />
  </Switch>
);

export default Routes;
