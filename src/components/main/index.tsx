import { Tiker, List } from '../index';

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
