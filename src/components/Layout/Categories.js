import { Box, Flex, Button, HStack } from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";

function Categories() {
  const dummyCategories = [
    "2D",
    "3D",
    "Action",
    "Anime",
    "Shooter",
    "Strategy",
    "Superhero",
    "Sports",
    "Horror",
  ];

  const curGenre = useParams().category;

  return (
    <Box boxShadow='xl' p='6' rounded='md'>
      <HStack justifyContent='space-between' margin='0 auto' maxW='1200px'>
        <Flex gap='12px'>
          {dummyCategories.map((category) => {
            return (
              <NavLink key={category} to={`/category/${category}`}>
                <Button
                  style={{
                    background: curGenre == category ? "#A0AEC0" : "",
                    color: curGenre == category ? "white" : "",
                  }}
                  _hover={{ bg: "#A0AEC0", color: "white" }}
                  borderRadius='16px'
                  variant='outline'
                >
                  {category}
                </Button>
              </NavLink>
            );
          })}
        </Flex>
        <Button variant='outline' bgColor='#F0F0F0'>
          MORE
        </Button>
      </HStack>
    </Box>
  );
}

export default Categories;
