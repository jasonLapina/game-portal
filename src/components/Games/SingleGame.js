import { Box, Image, Text } from "@chakra-ui/react";

function SingleGame({ title, thumbnail }) {
  const trimmedTitle = title.length > 15 ? `${title.slice(0, 15)}...` : title;
  return (
    <Box
      borderRadius='8px'
      boxShadow='0 4px 8px lightgray'
      padding='4px 4px 16px 4px'
      _hover={{
        cursor: "pointer",
        textDecoration: "underline",
      }}
    >
      <Image src={thumbnail} />
      <Text textAlign='center' fontSize='xl'>
        {trimmedTitle}
      </Text>
    </Box>
  );
}

export default SingleGame;
