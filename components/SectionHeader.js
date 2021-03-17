import { Box, Container, Flex, Heading } from "@chakra-ui/react";

const SectionHeader = ({ children }) => {
  return (
    <Flex
      w="full"
      backgroundImage="url('/section-back.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      h={["150px", null, "250px"]}
    >
      <Box h="full" w="full" background="rgba(1, 87, 71,0.5)">
        <Container maxW="container.lg2" h="full">
          <Flex flexDir="column" justify="center" align="center" h="full">
            <Heading
              color="white"
              size="2xl"
              fontWeight="500"
              lineHeight="1.3"
              mb="6"
            >
              {children}
            </Heading>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
};

export default SectionHeader;
