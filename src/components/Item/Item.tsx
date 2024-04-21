import { Link } from 'react-router-dom';
import styles from './Item.module.css';
import { ItemProps } from './Item.props';

const Item = ({ itemId, name, description, price, rating }: ItemProps) => {
  return (
    <Link className={styles.link} to={`/product/${itemId}`}>
      <div className={styles.item}>
        <img className={styles.image} src="/menu/pizza.png" />
        <div className={styles.header}>
          <p className={styles.price}>
            {price} <span className={styles.prefix}>₽</span>
          </p>
          <button className={styles.button}>
            <img src="/add-icon.svg" />
          </button>
        </div>
        <div className={styles['bottom-content']}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.rating}>
          <p className={styles['rating-text']}>{rating}</p>
          <img src="/star.svg" />
        </div>
      </div>
    </Link>
  );
};

export default Item;
