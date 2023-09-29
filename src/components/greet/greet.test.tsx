import { render, screen } from '@testing-library/react';
import Greet from './greet';

describe('Greet', () => {
  test('renders correctly', async () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeVisible();
  });

  test('renders with a name prop', async () => {
    render(<Greet name="Rajat" />);
    const textElement = screen.getByText(/hello Rajat/i);
    expect(textElement).toBeVisible();
  });
});
