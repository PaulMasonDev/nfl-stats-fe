import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { getPlayerStatsForMostRecentWeekByCurrentSeason } from "../../clientLibrary/stats/stats";

interface Player {
  PlayerID: number;
  Name: string;
}

export const AdminControls = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const handleDownloadPlayerStatsClick = async () => {
    const playerStatsForMostRecentWeek =
      await getPlayerStatsForMostRecentWeekByCurrentSeason();
    console.log(playerStatsForMostRecentWeek);
    setPlayers(playerStatsForMostRecentWeek);
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <TextField>Week</TextField>
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <Button
          onClick={handleDownloadPlayerStatsClick}
          variant="contained"
          color="primary"
        >
          Download Player Stats
        </Button>
      </Grid>
      <Grid item>
        {players?.length > 0 &&
          players.map((player) => {
            return <p key={player.PlayerID}>{player.Name}</p>;
          })}
      </Grid>
    </Grid>
  );
};
