import React from 'react';
import ReactDOM from 'react-dom';
import LobbyApp from './LobbyApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LobbyApp />, div);
});
