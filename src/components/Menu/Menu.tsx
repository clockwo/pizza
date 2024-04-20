import styles from './Menu.module.css';
import { MenuProps } from './Menu.props';

const Menu = ({ children }: MenuProps) => {
  return <div className={styles.menu}>{children}</div>;
};

export default Menu;
