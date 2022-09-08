import React from 'react';
import { WindFarm } from '../../types';
import { WindFarmLeftSide } from './components/LeftSide';
import { WindFarmRightSide } from './components/RightSide';
import styles from './WindFarmCard.module.css';

interface WindFarmCardProps {
  windFarm: WindFarm;
}

export const WindFarmCard = ({ windFarm }: WindFarmCardProps) => {
  const powerPercentage = Math.trunc(
    (parseFloat(windFarm.activePower) / parseFloat(windFarm.maxPower)) * 100
  );

  return (
    <div className={styles.container}>
      <WindFarmLeftSide windFarm={windFarm} powerPercentage={powerPercentage} />

      <WindFarmRightSide windFarm={windFarm} />
    </div>
  );
};
