import { IBuildOrder, BuildOrderStep } from '../../model';
import { Vietnamese, Khmer, Franks, Berbers, Burmese, Chinese, Huns, Indians, Italians, Magyars, Malians, Mongols, Persians, Portuguese, Saracens, Slavs, Spanish, Teutons, Turks } from '../civs';
export class ScoutRushBuildOrder implements IBuildOrder {
  name: string = "Scout Rush";
  steps: BuildOrderStep[] = [
    { villagerCount: "3", details: "Queue villagers", idealTimeInSeconds: 2 },
    { villagerCount: "3", details: "Build 2 houses", footnotes: ["Then send to sheep"], idealTimeInSeconds: 4 },
    { villagerCount: "4", details: "Sheep", idealTimeInSeconds: 25 },
    { villagerCount: "5", details: "Sheep", idealTimeInSeconds: 50 },
    { villagerCount: "6", details: "Sheep", idealTimeInSeconds: 75 },
    { villagerCount: "7", details: "Build lumber camp", footnotes: ["Then send to wood"], idealTimeInSeconds: 100 },
    { villagerCount: "8", details: "Wood", idealTimeInSeconds: 125 },
    { villagerCount: "9", details: "Wood", idealTimeInSeconds: 150 },
    { villagerCount: "10", details: "Build house and lure boar", idealTimeInSeconds: 175 },
    { villagerCount: "11", details: "Boar", idealTimeInSeconds: 200 },
    { villagerCount: "12", details: "Build mill", footnotes: ["Then send to berries"], idealTimeInSeconds: 225 },
    { villagerCount: "13", details: "Berries", idealTimeInSeconds: 250 },
    { villagerCount: "14", details: "Send a boar/sheep villager to build house near 2nd boar.", idealTimeInSeconds: 275 },
    { villagerCount: "14", details: "Berries", idealTimeInSeconds: 275 },
    { villagerCount: "15", details: "Berries", idealTimeInSeconds: 300 },
    { villagerCount: "15", details: "Lure 2nd boar.", idealTimeInSeconds: 300 },
    { villagerCount: "16", details: "Sheep/boar", idealTimeInSeconds: 325 },
    { villagerCount: "17", details: "Sheep/boar", idealTimeInSeconds: 350 },
    { villagerCount: "17", details: "Build 2 farms with weak villagers", idealTimeInSeconds: 350 },
    { villagerCount: "18", details: "Build lumber camp", footnotes: ["Then send to wood"], idealTimeInSeconds: 375 },
    { villagerCount: "19", details: "Wood", idealTimeInSeconds: 400 },
    { villagerCount: "20", details: "Wood", idealTimeInSeconds: 425 },
    { villagerCount: "21", details: "Wood", idealTimeInSeconds: 450 },
    { villagerCount: "21", details: "Loom", idealTimeInSeconds: 475 },
    {
      villagerCount: "21", details: "Feudal Age",
      footnotes: ["Send 4 from food to wood.", "Send 1 to build barracks and a house."],
      idealTimeInSeconds: 580,
      ageUpValue: "II"
    },
    { villagerCount: "22", details: "Build stable and then houses. Train scouts.", idealTimeInSeconds: 605 },
    { villagerCount: "23", details: "Farm", footnotes: ["Build farms with idle villagers."], idealTimeInSeconds: 630 },
    { villagerCount: "24", details: "Farm", idealTimeInSeconds: 655 },
    { villagerCount: "25", details: "Farm", idealTimeInSeconds: 680 },
    { villagerCount: "26", details: "Farm", idealTimeInSeconds: 705 },
    { villagerCount: "27", details: "Farm", idealTimeInSeconds: 730 },
    { villagerCount: "28", details: "Farm", idealTimeInSeconds: 755 },
    { villagerCount: "29", details: "Wood", idealTimeInSeconds: 780 },
    { villagerCount: "30", details: "Wood", footnotes: ["Send a villager to build a range. Train skirms"], idealTimeInSeconds: 805 },
    { villagerCount: "31", details: "Build mining camp on gold", footnotes: ["Send 2 from berries to gold"], idealTimeInSeconds: 830 },
    { villagerCount: "32", details: "Gold", idealTimeInSeconds: 855 },
    { villagerCount: "33", details: "Gold", idealTimeInSeconds: 880 },
    { villagerCount: "34", details: "Gold", idealTimeInSeconds: 905 },
    { villagerCount: "35", details: "Gold", footnotes: ["Don't forget to build a blacksmith and get fletching."], idealTimeInSeconds: 930 },
  ];
  finalTips = "Aim for castle age once you have over 6 scouts, 8 skirmishers and fletching.";
  recommendedCivs = [
    new Berbers(),
    new Burmese(),
    new Chinese(),
    new Franks(),
    new Huns(),
    new Indians(),
    new Italians(),
    new Khmer(),
    new Magyars(),
    new Malians(),
    new Mongols(),
    new Persians(),
    new Portuguese(),
    new Saracens(),
    new Slavs(),
    new Spanish(),
    new Teutons(),
    new Turks(),
    new Vietnamese()
  ];
}