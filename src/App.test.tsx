import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  render(<App />);

  describe('trigger button', () => {
    test('should show the modal when trigger is clicked', () => {
      const trigger = screen.getByText(/Show modal/i);

      fireEvent.click(trigger);
      
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('open');
    });
  });
});

