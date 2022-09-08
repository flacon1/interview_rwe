import { WindFarm } from '../../../types';
import styles from './../WindFarmCard.module.css';

interface WindFarmRightSide {
  windFarm: WindFarm;
}

export const WindFarmRightSide = ({ windFarm }: WindFarmRightSide) => (
  <div className={styles.rightSide}>
    <div className={styles.st}>
      <span> ST {windFarm.st ?? 0}</span>
    </div>
    <div className={styles.wa}>
      <span> WA {windFarm.wa ?? 0}</span>
    </div>
    <div className={styles.av}>
      <span> AV {windFarm.av ?? 0}</span>
    </div>
    <div className={styles.nc}>
      <span> NC {windFarm.nc ?? 0}</span>
    </div>
  </div>
);
