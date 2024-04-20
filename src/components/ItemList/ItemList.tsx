import { ItemListProps } from './ItemList.props';
import styles from './ItemList.module.css';

const ItemList = ({ children }: ItemListProps) => {
  return <div className={styles['item-list']}>{children}</div>;
};

export default ItemList;
