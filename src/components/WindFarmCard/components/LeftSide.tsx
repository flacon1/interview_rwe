import { LinearProgress } from '@mui/material';
import React from 'react';
import { WindFarm } from '../../../types';
import styles from './../WindFarmCard.module.css';

interface WindFarmLeftSideProps {
  windFarm: WindFarm;
  powerPercentage: number;
}

export const WindFarmLeftSide = ({ windFarm, powerPercentage }: WindFarmLeftSideProps) => (
  <div className={styles.leftSide}>
    <h3 className={styles.name}>{windFarm.name}</h3>
    <div className={styles.basicInfo}>
      <img src="/icon_wind.png" alt="wind icon" className={styles.windIcon} />
      <span>{windFarm.windSpeed} m/s</span>
      <span>{windFarm.temperature} &#8451;</span>
    </div>
    <div className={styles.powerInfo}>
      <span>
        Active power: {windFarm.activePower} / {windFarm.maxPower} MW
      </span>
    </div>
    <div className={styles.progressInfo}>
      <LinearProgress
        variant="determinate"
        value={powerPercentage}
        className={styles.progressBar}
      />
      <span className={styles.powerPercentage}>{powerPercentage} %</span>
    </div>
  </div>
);
