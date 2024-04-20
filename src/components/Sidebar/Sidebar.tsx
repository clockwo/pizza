import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';

const Sidebar = ({ children }: SidebarProps) => {
  return <div className={styles.sidebar}>{children}</div>;
};

export default Sidebar;
