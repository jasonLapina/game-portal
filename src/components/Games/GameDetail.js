import { Box, Heading } from "@chakra-ui/react";

function GameDetail({ game }) {
  return (
    <Box>
      <Heading>{game.title}</Heading>
    </Box>
  );
}

export default GameDetail;
