import { render, screen } from '@testing-library/react';
import App from './App';

test('renders frontend message', () => {
  render(<App />);
  const messageElement = screen.getByText(/hello from frontend/i);
  expect(messageElement).toBeInTheDocument();
});
