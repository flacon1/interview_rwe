export interface WindFarm {
  name: string;
  windSpeed: number;
  windDirection: 'N' | 'V' | 'S' | 'E' | string;
  version: string;
  activePower: string;
  maxPower: string;
  temperature: string;

  st?: number;
  wa?: number;
  av?: number;
  nc?: number;
}
