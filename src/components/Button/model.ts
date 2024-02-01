import { ButtonHTMLAttributes } from 'react';

export const enum ButtonComponentSchemas {
  Primary = 'primary',
  Neutral = 'neutral',
}

export interface ButtonComponent
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Color schema of the button.
   *
   * @default ButtonComponentSchemas.Primary
   */
  schema?: ButtonComponentSchemas;
}
