import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

test('renders App without crashing', () => {
  const root = createRoot(document.createElement('root'));
  root.render(<App />);
});

test('contains a react-org-chart div', () => {
  const root = createRoot(document.createElement('root'));
  root.render(<App />);
  expect(root).toContain('<div id=\"react-org-chart\" data-testid=\"react-org-chart\"></div>');
  ReactDOM.unmountComponentAtNode(div);
});