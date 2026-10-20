import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading and quote form', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /affordable life insurance protection/i })
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});
