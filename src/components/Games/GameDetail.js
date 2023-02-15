import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

function GameDetail({ game }) {
  const { title, description, short_description, thumbnail } = game;
  return (
    <Box>
      <VStack>
        <Heading marginBottom='40px'>{title}</Heading>
        <Image marginBottom='32px' src={thumbnail} />
        <Text fontSize='16px' maxW='800px'>
          {description}
        </Text>
      </VStack>
    </Box>
  );
}

export default GameDetail;
