import { windFarms } from '../mocks';

export const useWindFarms = () => {
  const windFarmsMock = windFarms;

  return { windFarms: windFarmsMock };
};
