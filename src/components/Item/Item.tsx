import styles from './Item.module.css';
import { ItemProps } from './Item.props';

const Item = ({ name, description, price, rating }: ItemProps) => {
  return (
    <div className={styles.item}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <p>{rating}</p>
    </div>
  );
};

export default Item;
