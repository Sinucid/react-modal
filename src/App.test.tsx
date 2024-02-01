import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  render(<App />);

  describe('when trigger button is clicked', () => {
    beforeEach(() => {
      const trigger = screen.getByText(/Show modal/i);
      fireEvent.click(trigger);
    });

    test('should show the modal', () => {
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('open');
    });
  });
});
