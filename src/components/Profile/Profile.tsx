import styles from './Profile.module.css';
import { ProfileProps } from './Profile.props';

const Profile = ({ avatar, name, email }: ProfileProps) => {
  return (
    <div className={styles.profile}>
      <div className={styles['img-container']}>
        <img className={styles.avatar} src={avatar} />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.email}>{email}</p>
    </div>
  );
};

export default Profile;
