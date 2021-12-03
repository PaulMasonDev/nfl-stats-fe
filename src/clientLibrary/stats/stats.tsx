import axios from "axios";
import { getCurrentSeason } from "../scores/scores";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getPlayerStatsForMostRecentWeekBySeason = async (
  season: number
) => {
  const { data: playerStatsForMostRecentWeek } = await axios.get(
    `https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStats/${season}?key=${API_KEY}`
  );
  return playerStatsForMostRecentWeek;
};

export const getPlayerStatsForMostRecentWeekByCurrentSeason = async () => {
  const currentSeason = await getCurrentSeason();
  const playerStatsForMostRecentWeekForCurrentSeason =
    await getPlayerStatsForMostRecentWeekBySeason(currentSeason);
  return playerStatsForMostRecentWeekForCurrentSeason;
};
