import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

const Button = ({ children, appearance, ...props }: ButtonProps) => {
  return (
    <button className={cn(styles.button, styles[`${appearance}`])} {...props}>
      {children}
    </button>
  );
};

export default Button;
