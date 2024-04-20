import { NavLink, Outlet } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import styles from './Menu.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Profile from '../../components/Profile/Profile';
import MenuIcon from '/menu-icon.svg';
import CartIcon from '/cart-icon.svg';
import ExitIcon from '/exit-icon.svg';

import Button from '../../components/Button/Button';
import cn from 'classnames';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar>
        <Profile
          avatar="/avatar.png"
          name="Максим Аллоргеро"
          email="ma@yandex.ru"
        />
        <Menu>
          <NavLink
            className={({ isActive }) =>
              cn(styles.link, {
                [styles['link-active']]: isActive,
              })
            }
            to="/"
          >
            <img src={MenuIcon} />
            Меню
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles.link, {
                [styles['link-active']]: isActive,
              })
            }
            to="/cart"
          >
            <img src={CartIcon} />
            Корзина
          </NavLink>
        </Menu>
        <Button appearance="menu">
          <img src={ExitIcon} />
          Выйти
        </Button>
      </Sidebar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
