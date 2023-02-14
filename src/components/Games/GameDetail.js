import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

function GameDetail({ game }) {
  const { title, description, short_description, thumbnail } = game;
  return (
    <VStack>
      <Heading marginBottom='40px'>{title}</Heading>
      <Image marginBottom='32px' src={thumbnail} />
      <Text fontSize='16px' maxW='800px'>
        {description}
      </Text>
    </VStack>
  );
}

export default GameDetail;
