import { render, screen } from '@testing-library/react';
import { AssignmentList } from './components/AssignmentList.tsx'
import { Popup } from './components/Popup';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

describe('Assignment List', () => {
  test('renders Assignment List component', () => {
    render(<AssignmentList />);
  });
});

describe('Popup', () => {
  test('renders Popup component', () => {
    render(<Popup />);
  });
});
