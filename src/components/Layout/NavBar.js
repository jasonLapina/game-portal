import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

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
        <Heading>CloudArcade</Heading>
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
          <InputGroup maxW='32%'>
            <Input placeholder='Search game' />
            <InputRightElement children={<Search2Icon />} />
          </InputGroup>
        </Flex>
      </HStack>
    </Box>
  );
}

export default NavBar;
