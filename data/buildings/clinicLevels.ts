export interface clinicLevel {
  level: number;
  meat: number;
  wood: number;
  coal: number;
  iron: number;
  timeInSeconds: number;
}

export const clinicLevels: clinicLevel[] = [
  { level: 1, meat: 0, wood: 0, coal: 0, iron: 0, timeInSeconds: 2 },
  { level: 2, meat: 0, wood: 50, coal: 0, iron: 0, timeInSeconds: 9 },
  { level: 3, meat: 0, wood: 240, coal: 0, iron: 0, timeInSeconds: 45 },
  { level: 4, meat: 0, wood: 540, coal: 105, iron: 0, timeInSeconds: 135 },
  { level: 5, meat: 0, wood: 2200, coal: 455, iron: 0, timeInSeconds: 270 },
  { level: 6, meat: 0, wood: 5700, coal: 1100, iron: 285, timeInSeconds: 540 },
  {
    level: 7,
    meat: 0,
    wood: 20000,
    coal: 4100,
    iron: 1000,
    timeInSeconds: 1080,
  },
  {
    level: 8,
    meat: 0,
    wood: 37000,
    coal: 7500,
    iron: 1800,
    timeInSeconds: 1620,
  },
  {
    level: 9,
    meat: 0,
    wood: 78000,
    coal: 15000,
    iron: 3900,
    timeInSeconds: 2430,
  },
  {
    level: 10,
    meat: 0,
    wood: 130000,
    coal: 27000,
    iron: 6900,
    timeInSeconds: 3240,
  },
];
