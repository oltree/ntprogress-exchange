import List from '../lists';
import Tiker from '../tiker';

import styles from './index.module.scss';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Tiker />
      <List />
    </div>
  );
};

export default Main;
