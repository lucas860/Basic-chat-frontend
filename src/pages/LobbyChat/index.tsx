import React, { useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';

import { Container } from './styles';

interface LobbyChatSocketProps {
  user: string;
  text: string;
}

interface RollProps {
  roll: string;
}

let socket: SocketIOClient.Socket;
const LobbyChat: React.FC<RouteComponentProps> = ({ location }) => {
  const { username, room } = queryString.parse(location.search);
  const [diceRolls, setDiceRolls] = useState<string[]>([]);

  const rollD4 = useCallback(() => {
    const d4 = Math.floor(Math.random() * 4) + 1;

    socket.emit('diceRoll', {
      user: username,
      room,
      diceType: 'd4',
      dice: d4,
    });
  }, [username, room]);

  const rollDice = useCallback(
    (diceType: string) => {
      switch (diceType) {
        case 'd4':
          const d4 = Math.floor(Math.random() * 4) + 1;

          socket.emit('diceRoll', {
            user: username,
            room,
            diceType,
            dice: d4,
          });
          break;
        case 'd6':
          const d6 = Math.floor(Math.random() * 6) + 1;

          socket.emit('diceRoll', {
            user: username,
            room,
            diceType,
            dice: d6,
          });
          break;
        case 'd8':
          const d8 = Math.floor(Math.random() * 8) + 1;

          socket.emit('diceRoll', {
            user: username,
            room,
            diceType,
            dice: d8,
          });
          break;
        case 'd10':
          const d10 = Math.floor(Math.random() * 10) + 1;

          socket.emit('diceRoll', {
            user: username,
            room,
            diceType,
            dice: d10,
          });
          break;
        case 'd12':
          const d12 = Math.floor(Math.random() * 12) + 1;

          socket.emit('diceRoll', {
            user: username,
            room,
            diceType,
            dice: d12,
          });
          break;
        case 'd100':
          const d100 = Math.floor(Math.random() * 100) + 1;

          socket.emit('diceRoll', {
            user: username,
            room,
            diceType,
            dice: d100,
          });
          break;
        default:
          break;
      }
    },
    [username, room],
  );

  useEffect(() => {
    socket = io('localhost:3333');

    socket.emit('join', { user: username, room });

    return () => {
      socket.close();
    };
  }, [username, room]);

  useEffect(() => {
    socket.on('message', ({ user, text }: LobbyChatSocketProps) => {
      console.log(user, text);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    socket.on('roll', ({ roll }: RollProps) => {
      console.log(roll);
      setDiceRolls([...diceRolls, roll]);
    });

    return () => {
      socket.off('roll');
    };
  }, [diceRolls]);

  return (
    <Container>
      <h1>{`Lobby ${room}`}</h1>

      <section className="dice-btns">
        <button type="button" onClick={() => rollDice('d4')}>
          D4
        </button>

        <button type="button" onClick={() => rollDice('d6')}>
          D6
        </button>

        <button type="button" onClick={() => rollDice('d8')}>
          D8
        </button>

        <button type="button" onClick={() => rollDice('d10')}>
          D10
        </button>

        <button type="button" onClick={() => rollDice('d12')}>
          D12
        </button>

        <button type="button" onClick={() => rollDice('d100')}>
          D100
        </button>
      </section>

      <section className="rolls-container">
        <ul>
          <li>Mensagem Test</li>
          {diceRolls.map(diceRoll => (
            <li>{diceRoll}</li>
          ))}
        </ul>
      </section>
    </Container>
  );
};

export default LobbyChat;
