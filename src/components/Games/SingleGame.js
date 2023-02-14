import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SingleGame({ title, thumbnail, id }) {
  const trimmedTitle = title.length > 15 ? `${title.slice(0, 15)}...` : title;

  return (
    <Link to={`/game/${id}`}>
      <Box
        borderRadius='8px'
        boxShadow='0 4px 8px lightgray'
        padding='4px 4px 16px 4px'
        _hover={{
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        <Image alt={title} src={thumbnail} />
        <Text textAlign='center' fontSize='xl'>
          {trimmedTitle}
        </Text>
      </Box>
    </Link>
  );
}

export default SingleGame;
