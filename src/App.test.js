import { render, screen } from '@testing-library/react';
import App from './App';


test('renders filtered by', () => {
  render(<App />);
  const linkElement = screen.getByText(/Filtered By/);
  expect(linkElement).toBeInTheDocument();
});

