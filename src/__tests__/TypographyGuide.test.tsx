import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TypographyGuide from '../pages/TypographyGuide';

// Mock react-router-dom's Link component
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

describe('TypographyGuide Component', () => {
  it('renders typography guide heading', () => {
    render(<TypographyGuide />);
    expect(screen.getByText('Typography Guide')).toBeInTheDocument();
  });

  it('renders back to home link', () => {
    render(<TypographyGuide />);
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  it('renders button examples', () => {
    render(<TypographyGuide />);
    expect(screen.getByText('Default Button')).toBeInTheDocument();
    expect(screen.getByText('Secondary Button')).toBeInTheDocument();
    expect(screen.getByText('Outline Button')).toBeInTheDocument();
  });

  it('renders headings section', () => {
    render(<TypographyGuide />);
    expect(screen.getByText('Heading 1')).toBeInTheDocument();
    expect(screen.getByText('Heading 2')).toBeInTheDocument();
    expect(screen.getByText('Heading 3')).toBeInTheDocument();
  });
});
