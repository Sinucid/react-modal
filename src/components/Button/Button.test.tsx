import { render, screen } from '@testing-library/react';
import Button from './Button';
import { ButtonComponentSchemas } from './model';

describe('Button', () => {
  const title = 'Button title';
  const schema = ButtonComponentSchemas.Neutral;
  const type = 'button';

  test('should render the button with appropriate title and attributes', () => {
    render(<Button {...{schema, type}}>{title}</Button>);

    const button = screen.getByText(title);
    expect(button).toHaveAttribute('schema', schema);
    expect(button).toHaveAttribute('type', type);
  });
});

