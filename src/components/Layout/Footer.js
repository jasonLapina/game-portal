import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
function Footer() {
  const dummyFooter = [
    {
      title: "FOOTER 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      title: "FOOTER 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      title: "FOOTER 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
  return (
    <>
      <Box w='100%' bgColor='#2C3E50'>
        <Flex gap='40px' maxW='1200px' margin='0 auto'>
          {dummyFooter.map((footer) => {
            return (
              <VStack key={footer.title} color='white' paddingBlock='48px'>
                <Heading letterSpacing='2px' fontWeight='600'>
                  {footer.title}
                </Heading>
                <Text textAlign='center'>{footer.text}</Text>
              </VStack>
            );
          })}
        </Flex>
      </Box>
      <Center paddingBlock='24px' color='white' w='100%' bgColor='#1A252F'>
        Jason Lapina © 2023. All rights reserved. v1.0.0
      </Center>
    </>
  );
}

export default Footer;
