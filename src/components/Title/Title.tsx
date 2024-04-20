import styles from './Title.module.css';
import { TitleProps } from './Title.props';

const Title = ({ children }: TitleProps) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
