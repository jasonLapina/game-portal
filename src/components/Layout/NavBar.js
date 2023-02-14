import { Box, Button, Flex, Heading, HStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function NavBar() {
  const dummyNavs = ["Blog", "Dropdown", "Sample page", "Login"];
  return (
    <Box w='100%' bgColor='#2C3E50'>
      <HStack
        color='white'
        margin='0 auto'
        maxW='1200px'
        justifyContent='space-between'
        paddingBlock='8px'
      >
        <Link to='/'>
          <Heading>CloudArcade</Heading>
        </Link>

        <Flex
          fontWeight='500'
          gap='16px'
          paddingBlock='12px'
          alignItems='center'
        >
          {dummyNavs.map((nav) => {
            return (
              <Button
                textTransform='uppercase'
                _hover={{ bg: "#718096" }}
                key={nav}
                variant='ghost'
              >
                {nav}
              </Button>
            );
          })}
          <SearchBar />
        </Flex>
      </HStack>
    </Box>
  );
}

export default NavBar;
