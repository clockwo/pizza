import styles from './Input.module.css';
import { InputProps } from './Input.props';
import { forwardRef } from 'react';
import cn from 'classnames';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ appearance, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(styles.input, styles[`${appearance}`])}
        {...props}
      />
    );
  }
);

export default Input;
