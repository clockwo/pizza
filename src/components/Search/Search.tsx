import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import { forwardRef } from 'react';
import SearchIcon from '/search-icon.svg';
import cn from 'classnames';

const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ appearance, ...props }, ref) => {
    return (
      <search className={styles.search}>
        <input
          ref={ref}
          className={cn(styles.input, styles[`${appearance}`])}
          {...props}
        />
        <img className={styles.icon} src={SearchIcon} />
      </search>
    );
  }
);

export default Search;
