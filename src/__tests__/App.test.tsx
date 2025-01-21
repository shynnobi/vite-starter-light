import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders typography guide heading', () => {
    render(<App />);
    expect(screen.getByText('Typography Guide')).toBeInTheDocument();
  });

  it('renders button examples', () => {
    render(<App />);
    expect(screen.getByText('Default Button')).toBeInTheDocument();
    expect(screen.getByText('Secondary Button')).toBeInTheDocument();
    expect(screen.getByText('Outline Button')).toBeInTheDocument();
  });
});
