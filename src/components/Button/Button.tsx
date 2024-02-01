import React, { PropsWithChildren } from 'react';
import { ButtonComponent } from './model';
import styles from './Button.module.css';

const Button: React.FC<PropsWithChildren<ButtonComponent>> = ({
  children,
  ...buttonProps
}) => {
  return (
    <button {...buttonProps} className={styles.root}>
      {children}
    </button>
  );
};

export default Button;
