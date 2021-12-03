import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getCurrentSeason = async () => {
  const { data: currentSeason } = await axios.get(
    `https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=${API_KEY}`
  );
  return currentSeason;
};

export const getMostRecentWeek = async () => {
  const { data: mostRecentWeek } = await axios.get(
    `https://api.sportsdata.io/v3/nfl/scores/json/LastCompletedWeek?key=${API_KEY}`
  );
  return mostRecentWeek;
};
