export interface FurnaceLevel {
  level: string; // String because some levels use "FC1-1" format
  meat: number;
  wood: number;
  coal: number;
  iron: number;
  fireCrystals: number;
  timeInSeconds: number;
}

export const furnaceLevels: FurnaceLevel[] = [
  {
    level: '1',
    meat: 0,
    wood: 0,
    coal: 0,
    iron: 0,
    fireCrystals: 0,
    timeInSeconds: 0,
  },
  {
    level: '2',
    meat: 0,
    wood: 180,
    coal: 0,
    iron: 0,
    fireCrystals: 0,
    timeInSeconds: 6,
  },
  {
    level: '3',
    meat: 0,
    wood: 805,
    coal: 0,
    iron: 0,
    fireCrystals: 0,
    timeInSeconds: 60,
  },
  {
    level: '4',
    meat: 0,
    wood: 1800,
    coal: 360,
    iron: 0,
    fireCrystals: 0,
    timeInSeconds: 180,
  },
  {
    level: '5',
    meat: 0,
    wood: 7600,
    coal: 1500,
    iron: 0,
    fireCrystals: 0,
    timeInSeconds: 600,
  },
  {
    level: '6',
    meat: 0,
    wood: 19000,
    coal: 3800,
    iron: 960,
    fireCrystals: 0,
    timeInSeconds: 1800,
  },
  {
    level: '7',
    meat: 0,
    wood: 69000,
    coal: 13000,
    iron: 3400,
    fireCrystals: 0,
    timeInSeconds: 3600,
  },
  {
    level: '8',
    meat: 0,
    wood: 120000,
    coal: 25000,
    iron: 6300,
    fireCrystals: 0,
    timeInSeconds: 9000,
  },
  {
    level: '9',
    meat: 0,
    wood: 260000,
    coal: 52000,
    iron: 13000,
    fireCrystals: 0,
    timeInSeconds: 16200,
  },
  {
    level: '10',
    meat: 0,
    wood: 460000,
    coal: 92000,
    iron: 23000,
    fireCrystals: 0,
    timeInSeconds: 21600,
  },
  {
    level: '11',
    meat: 1300000,
    wood: 1300000,
    coal: 260000,
    iron: 65000,
    fireCrystals: 0,
    timeInSeconds: 27000,
  },
  {
    level: '12',
    meat: 1600000,
    wood: 1600000,
    coal: 330000,
    iron: 84000,
    fireCrystals: 0,
    timeInSeconds: 32400,
  },
  {
    level: '13',
    meat: 2300000,
    wood: 2300000,
    coal: 470000,
    iron: 110000,
    fireCrystals: 0,
    timeInSeconds: 39600,
  },
  {
    level: '14',
    meat: 3100000,
    wood: 3100000,
    coal: 630000,
    iron: 150000,
    fireCrystals: 0,
    timeInSeconds: 50400,
  },
  {
    level: '15',
    meat: 4600000,
    wood: 4600000,
    coal: 930000,
    iron: 230000,
    fireCrystals: 0,
    timeInSeconds: 64800,
  },
  {
    level: '16',
    meat: 5900000,
    wood: 5900000,
    coal: 1100000,
    iron: 290000,
    fireCrystals: 0,
    timeInSeconds: 109680,
  },
  {
    level: '17',
    meat: 9300000,
    wood: 9300000,
    coal: 1800000,
    iron: 460000,
    fireCrystals: 0,
    timeInSeconds: 131640,
  },
  {
    level: '18',
    meat: 12000000,
    wood: 12000000,
    coal: 2500000,
    iron: 620000,
    fireCrystals: 0,
    timeInSeconds: 157980,
  },
  {
    level: '19',
    meat: 15000000,
    wood: 15000000,
    coal: 3100000,
    iron: 780000,
    fireCrystals: 0,
    timeInSeconds: 237000,
  },
  {
    level: '20',
    meat: 21000000,
    wood: 21000000,
    coal: 4300000,
    iron: 1000000,
    fireCrystals: 0,
    timeInSeconds: 296280,
  },
  {
    level: '21',
    meat: 27000000,
    wood: 27000000,
    coal: 5400000,
    iron: 1300000,
    fireCrystals: 0,
    timeInSeconds: 385140,
  },
  {
    level: '22',
    meat: 36000000,
    wood: 36000000,
    coal: 7200000,
    iron: 1800000,
    fireCrystals: 0,
    timeInSeconds: 577740,
  },
  {
    level: '23',
    meat: 44000000,
    wood: 44000000,
    coal: 8900000,
    iron: 2200000,
    fireCrystals: 0,
    timeInSeconds: 808800,
  },
  {
    level: '24',
    meat: 60000000,
    wood: 60000000,
    coal: 12000000,
    iron: 3000000,
    fireCrystals: 0,
    timeInSeconds: 1132380,
  },
  {
    level: '25',
    meat: 81000000,
    wood: 81000000,
    coal: 16000000,
    iron: 4000000,
    fireCrystals: 0,
    timeInSeconds: 1585320,
  },
  {
    level: '26',
    meat: 100000000,
    wood: 100000000,
    coal: 21000000,
    iron: 5200000,
    fireCrystals: 0,
    timeInSeconds: 1823160,
  },
  {
    level: '27',
    meat: 140000000,
    wood: 140000000,
    coal: 24000000,
    iron: 7400000,
    fireCrystals: 0,
    timeInSeconds: 2187780,
  },
  {
    level: '28',
    meat: 190000000,
    wood: 190000000,
    coal: 39000000,
    iron: 9900000,
    fireCrystals: 0,
    timeInSeconds: 2515920,
  },
  {
    level: '29',
    meat: 240000000,
    wood: 240000000,
    coal: 49000000,
    iron: 12000000,
    fireCrystals: 0,
    timeInSeconds: 2893320,
  },
  {
    level: '30',
    meat: 300000000,
    wood: 300000000,
    coal: 60000000,
    iron: 15000000,
    fireCrystals: 0,
    timeInSeconds: 3472020,
  },
  // FC1 Levels
  {
    level: 'FC1-1',
    meat: 67000000,
    wood: 67000000,
    coal: 13000000,
    iron: 3300000,
    fireCrystals: 132,
    timeInSeconds: 604800,
  },
  {
    level: 'FC1-2',
    meat: 67000000,
    wood: 67000000,
    coal: 13000000,
    iron: 3300000,
    fireCrystals: 132,
    timeInSeconds: 604800,
  },
  {
    level: 'FC1-3',
    meat: 67000000,
    wood: 67000000,
    coal: 13000000,
    iron: 3300000,
    fireCrystals: 132,
    timeInSeconds: 604800,
  },
  {
    level: 'FC1-4',
    meat: 67000000,
    wood: 67000000,
    coal: 13000000,
    iron: 3300000,
    fireCrystals: 132,
    timeInSeconds: 604800,
  },
  {
    level: 'FC1-5',
    meat: 67000000,
    wood: 67000000,
    coal: 13000000,
    iron: 3300000,
    fireCrystals: 132,
    timeInSeconds: 604800,
  },

  // FC2 Levels
  {
    level: 'FC2-1',
    meat: 72000000,
    wood: 72000000,
    coal: 14000000,
    iron: 3600000,
    fireCrystals: 158,
    timeInSeconds: 777600,
  },
  {
    level: 'FC2-2',
    meat: 72000000,
    wood: 72000000,
    coal: 14000000,
    iron: 3600000,
    fireCrystals: 158,
    timeInSeconds: 777600,
  },
  {
    level: 'FC2-3',
    meat: 72000000,
    wood: 72000000,
    coal: 14000000,
    iron: 3600000,
    fireCrystals: 158,
    timeInSeconds: 777600,
  },
  {
    level: 'FC2-4',
    meat: 72000000,
    wood: 72000000,
    coal: 14000000,
    iron: 3600000,
    fireCrystals: 158,
    timeInSeconds: 777600,
  },
  {
    level: 'FC2-5',
    meat: 72000000,
    wood: 72000000,
    coal: 14000000,
    iron: 3600000,
    fireCrystals: 158,
    timeInSeconds: 777600,
  },

  // FC3 Levels
  {
    level: 'FC3-1',
    meat: 79000000,
    wood: 79000000,
    coal: 15000000,
    iron: 3900000,
    fireCrystals: 238,
    timeInSeconds: 950400,
  },
  {
    level: 'FC3-2',
    meat: 79000000,
    wood: 79000000,
    coal: 15000000,
    iron: 3900000,
    fireCrystals: 238,
    timeInSeconds: 950400,
  },
  {
    level: 'FC3-3',
    meat: 79000000,
    wood: 79000000,
    coal: 15000000,
    iron: 3900000,
    fireCrystals: 238,
    timeInSeconds: 950400,
  },
  {
    level: 'FC3-4',
    meat: 79000000,
    wood: 79000000,
    coal: 15000000,
    iron: 3900000,
    fireCrystals: 238,
    timeInSeconds: 950400,
  },
  {
    level: 'FC3-5',
    meat: 79000000,
    wood: 79000000,
    coal: 15000000,
    iron: 3900000,
    fireCrystals: 238,
    timeInSeconds: 950400,
  },

  // FC4 Levels
  {
    level: 'FC4-1',
    meat: 82000000,
    wood: 82000000,
    coal: 16000000,
    iron: 4100000,
    fireCrystals: 280,
    timeInSeconds: 1036800,
  },
  {
    level: 'FC4-2',
    meat: 82000000,
    wood: 82000000,
    coal: 16000000,
    iron: 4100000,
    fireCrystals: 280,
    timeInSeconds: 1036800,
  },
  {
    level: 'FC4-3',
    meat: 82000000,
    wood: 82000000,
    coal: 16000000,
    iron: 4100000,
    fireCrystals: 280,
    timeInSeconds: 1036800,
  },
  {
    level: 'FC4-4',
    meat: 82000000,
    wood: 82000000,
    coal: 16000000,
    iron: 4100000,
    fireCrystals: 280,
    timeInSeconds: 1036800,
  },
  {
    level: 'FC4-5',
    meat: 82000000,
    wood: 82000000,
    coal: 16000000,
    iron: 4100000,
    fireCrystals: 280,
    timeInSeconds: 1036800,
  },

  // FC5 Levels
  {
    level: 'FC5-1',
    meat: 84000000,
    wood: 84000000,
    coal: 16000000,
    iron: 4200000,
    fireCrystals: 335,
    timeInSeconds: 1209600,
  },
  {
    level: 'FC5-2',
    meat: 84000000,
    wood: 84000000,
    coal: 16000000,
    iron: 4200000,
    fireCrystals: 335,
    timeInSeconds: 1209600,
  },
  {
    level: 'FC5-3',
    meat: 84000000,
    wood: 84000000,
    coal: 16000000,
    iron: 4200000,
    fireCrystals: 335,
    timeInSeconds: 1209600,
  },
  {
    level: 'FC5-4',
    meat: 84000000,
    wood: 84000000,
    coal: 16000000,
    iron: 4200000,
    fireCrystals: 335,
    timeInSeconds: 1209600,
  },
  {
    level: 'FC5-5',
    meat: 84000000,
    wood: 84000000,
    coal: 16000000,
    iron: 4200000,
    fireCrystals: 335,
    timeInSeconds: 1209600,
  },
];
