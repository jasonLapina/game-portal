import { Box, Flex, Button, HStack } from "@chakra-ui/react";

function Categories() {
  const dummyCategories = [
    ".IO",
    "2 Player",
    "3D",
    "Action",
    "Adventure",
    "Arcade",
    "Bejeweled",
    "Classics",
    "Clicker",
  ];

  return (
    <Box boxShadow='xl' p='6' rounded='md'>
      <HStack justifyContent='space-between' margin='0 auto' maxW='1200px'>
        <Flex gap='12px'>
          {dummyCategories.map((category) => {
            return (
              <Button
                _hover={{ bg: "#A0AEC0" }}
                borderRadius='16px'
                key={category}
                variant='outline'
              >
                {category}
              </Button>
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
