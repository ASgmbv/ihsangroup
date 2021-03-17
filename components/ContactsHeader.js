import { Box, Container, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { MdLocationCity, MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const ContactsHeader = () => {
  return (
    <Box bg="#EFF1ED">
      <Container maxW="container.xl" py="3">
        <Flex
          justify="space-between"
          align="center"
          h="full"
          flexDir={["column", null, "row"]}
        >
          <Flex align="center">
            <Flex align="center">
              <Icon
                as={MdLocationCity}
                boxSize={4}
                color="#444D4A"
                mr="2"
                _hover={{
                  color: "jashyl",
                }}
              />
              <Text
                fontSize="sm"
                mr="5"
                fontWeight="semibold"
                color="#444D4A"
                _hover={{
                  color: "jashyl",
                }}
              >
                г.Бишкек, ул.Боконбаева, 113. 5 этаж.
              </Text>
            </Flex>
            <Link href="tel:+996700005151">
              <Flex align="center">
                <Icon
                  as={FaPhoneAlt}
                  boxSize={3}
                  color="#444D4A"
                  mr="2"
                  _hover={{
                    color: "jashyl",
                  }}
                />
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  color="#444D4A"
                  _hover={{
                    color: "jashyl",
                  }}
                >
                  +996 700 005 151
                </Text>
              </Flex>
            </Link>
          </Flex>
          <Flex>
            <Link _hover={{ color: "jashyl" }}>
              <Icon as={FaInstagram} boxSize={4} mr="5" />
            </Link>
            <Link _hover={{ color: "jashyl" }}>
              <Icon as={FaFacebookSquare} boxSize={4} mr="5" />
            </Link>
            <Link _hover={{ color: "jashyl" }}>
              <Icon as={MdEmail} boxSize={4} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactsHeader;
