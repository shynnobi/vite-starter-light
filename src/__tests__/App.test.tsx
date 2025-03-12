import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock react-router-dom's Link component
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

describe('App Component', () => {
  it('renders hello world heading', () => {
    render(<App />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders welcome message', () => {
    render(<App />);
    expect(
      screen.getByText('Welcome to our Vite + React + TypeScript starter')
    ).toBeInTheDocument();
  });

  it('renders link to typography guide', () => {
    render(<App />);
    expect(screen.getByText('View Typography Guide')).toBeInTheDocument();
  });
});
