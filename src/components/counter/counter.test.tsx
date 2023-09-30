import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Counter from './counter';

test('Should increment counter by 1', async () => {
  const user = userEvent.setup();
  const screen = render(<Counter />);
  const countLabel = screen.getByRole('heading', { level: 1 });
  expect(countLabel).toHaveTextContent('0');
  const button = screen.getByRole('button', {
    name: /increment/i,
  });
  await user.click(button);
  expect(countLabel).toHaveTextContent('1');
});

test('Should increment counter by 2', async () => {
  const user = userEvent.setup();
  const screen = render(<Counter />);
  const countLabel = screen.getByRole('heading', { level: 1 });
  expect(countLabel).toHaveTextContent('0');
  const button = screen.getByRole('button', {
    name: /increment/i,
  });
  await user.dblClick(button);
  expect(countLabel).toHaveTextContent('2');
});
