import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(App, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('contains a react-org-chart div', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('<div id=\"react-org-chart\"></div>');
  ReactDOM.unmountComponentAtNode(div);
});