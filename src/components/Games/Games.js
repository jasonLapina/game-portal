import { Grid } from "@chakra-ui/react";
import SingleGame from "./SingleGame";

function Games({ games }) {
  return (
    <Grid
      alignItems='center'
      justifyItems='center'
      templateColumns='repeat( auto-fit, minmax(200px, 1fr) )'
      margin='40px auto'
      maxW='1300px'
      gap='4px 8px'
    >
      {games.map((game) => {
        const { title, thumbnail } = game;
        return <SingleGame key={title} thumbnail={thumbnail} title={title} />;
      })}
    </Grid>
  );
}

export default Games;
