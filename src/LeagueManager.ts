export enum League {
    Soil = '土块',
    Stone = '石块',
    Iron = '铁块',
    Copper = '铜块',
    Silver = '银块',
    Gold = '金块',
    Platinum = '铂金',
    Diamond = '钻石',
    StarDiamond = '星钻',
    Crown = '皇冠',
    Eternal = '永恒',
}

export interface LeagueData {
    name: League;
    level: number;
    subLevel: number;
    thresholdBlockCount: number;
    blocksToNextLevel: number;
}

const LEAGUE_DATA: LeagueData[] = [
    { name: League.Soil, level: 0, subLevel: 1, thresholdBlockCount: 0, blocksToNextLevel: 100 },
    { name: League.Soil, level: 0, subLevel: 2, thresholdBlockCount: 100, blocksToNextLevel: 100 },
    { name: League.Soil, level: 0, subLevel: 3, thresholdBlockCount: 200, blocksToNextLevel: 100 },
    { name: League.Stone, level: 1, subLevel: 1, thresholdBlockCount: 300, blocksToNextLevel: 200 },
    { name: League.Stone, level: 1, subLevel: 2, thresholdBlockCount: 500, blocksToNextLevel: 200 },
    { name: League.Stone, level: 1, subLevel: 3, thresholdBlockCount: 700, blocksToNextLevel: 200 },
    { name: League.Iron, level: 2, subLevel: 1, thresholdBlockCount: 900, blocksToNextLevel: 300 },
    { name: League.Iron, level: 2, subLevel: 2, thresholdBlockCount: 1200, blocksToNextLevel: 300 },
    { name: League.Iron, level: 2, subLevel: 3, thresholdBlockCount: 1500, blocksToNextLevel: 300 },
    { name: League.Copper, level: 3, subLevel: 1, thresholdBlockCount: 1800, blocksToNextLevel: 400 },
    { name: League.Copper, level: 3, subLevel: 2, thresholdBlockCount: 2200, blocksToNextLevel: 400 },
    { name: League.Copper, level: 3, subLevel: 3, thresholdBlockCount: 2600, blocksToNextLevel: 400 },
    { name: League.Silver, level: 4, subLevel: 1, thresholdBlockCount: 3000, blocksToNextLevel: 1000 },
    { name: League.Silver, level: 4, subLevel: 2, thresholdBlockCount: 4000, blocksToNextLevel: 1000 },
    { name: League.Silver, level: 4, subLevel: 3, thresholdBlockCount: 5000, blocksToNextLevel: 1000 },
    { name: League.Gold, level: 5, subLevel: 1, thresholdBlockCount: 6000, blocksToNextLevel: 1500 },
    { name: League.Gold, level: 5, subLevel: 2, thresholdBlockCount: 7500, blocksToNextLevel: 1500 },
    { name: League.Gold, level: 5, subLevel: 3, thresholdBlockCount: 9000, blocksToNextLevel: 1500 },
    { name: League.Platinum, level: 6, subLevel: 1, thresholdBlockCount: 10500, blocksToNextLevel: 2000 },
    { name: League.Platinum, level: 6, subLevel: 2, thresholdBlockCount: 12500, blocksToNextLevel: 2000 },
    { name: League.Platinum, level: 6, subLevel: 3, thresholdBlockCount: 14500, blocksToNextLevel: 2000 },
    { name: League.Diamond, level: 7, subLevel: 1, thresholdBlockCount: 16500, blocksToNextLevel: 3000 },
    { name: League.Diamond, level: 7, subLevel: 2, thresholdBlockCount: 19500, blocksToNextLevel: 3000 },
    { name: League.Diamond, level: 7, subLevel: 3, thresholdBlockCount: 22500, blocksToNextLevel: 3000 },
    { name: League.StarDiamond, level: 8, subLevel: 1, thresholdBlockCount: 25500, blocksToNextLevel: 4000 },
    { name: League.StarDiamond, level: 8, subLevel: 2, thresholdBlockCount: 29500, blocksToNextLevel: 4000 },
    { name: League.StarDiamond, level: 8, subLevel: 3, thresholdBlockCount: 33500, blocksToNextLevel: 4000 },
    { name: League.Crown, level: 9, subLevel: 1, thresholdBlockCount: 37500, blocksToNextLevel: 5000 },
    { name: League.Crown, level: 9, subLevel: 2, thresholdBlockCount: 42500, blocksToNextLevel: 5000 },
    { name: League.Crown, level: 9, subLevel: 3, thresholdBlockCount: 47500, blocksToNextLevel: 5000 },
    { name: League.Eternal, level: 10, subLevel: 0, thresholdBlockCount: 52500, blocksToNextLevel: 0 },
];

export class LeagueManager {
    public static getLeagueData(blockCount: number): LeagueData {
        for (let i = LEAGUE_DATA.length - 1; i >= 0; i--) {
            if (blockCount >= LEAGUE_DATA[i].thresholdBlockCount) {
                return LEAGUE_DATA[i];
            }
        }
        return LEAGUE_DATA[0];
    }

    public static getLeagueName(blockCount: number): string {
        const data = this.getLeagueData(blockCount);
        if (data.subLevel === 0) {
            return data.name;
        }
        const subLevelStr = ['Ⅰ', 'Ⅱ', 'Ⅲ'][data.subLevel - 1];
        return `${data.name}${subLevelStr}`;
    }

    public static getBlocksToNextLevel(blockCount: number): number {
        const data = this.getLeagueData(blockCount);
        if (data.subLevel === 0) {
            return 0;
        }
        const nextThreshold = data.thresholdBlockCount + data.blocksToNextLevel;
        return nextThreshold - blockCount;
    }
}
