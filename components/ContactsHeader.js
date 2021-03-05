import { Box, Container, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { MdMailOutline, MdLocationCity } from "react-icons/md";
import { FaPhoneAlt, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const ContactsHeader = () => {
  return (
    <Box bg="#EFF1ED">
      <Container maxW="container.xl" py="2">
        <Flex
          justify="space-between"
          align="center"
          h="full"
          flexDir={["column", null, "row"]}
        >
          <Flex align="center">
            <Icon as={MdLocationCity} boxSize={4} color="#444D4A" mr="2" />
            <Text fontSize="sm" color="#444D4A">
              Кыргызстан, г.Бишкек, ул.Боконбаева, 113. 5 этаж.
            </Text>
          </Flex>
          <Link href="tel:+996700005151">
            <Flex align="center">
              <Icon as={FaPhoneAlt} boxSize={3} color="#444D4A" mr="2" />
              <Text fontSize="sm" color="#444D4A">
                +996 700 005 151
              </Text>
            </Flex>
          </Link>
          <Link href="mailto:info@ihsangroup.kg">
            <Flex align="center" mb={[1, null, 0]}>
              <Icon as={MdMailOutline} boxSize={4} color="#444D4A" mr="2" />
              <Text fontSize="sm" color="#444D4A">
                info@ihsangroup.kg
              </Text>
            </Flex>
          </Link>
          <Flex>
            <Link>
              <Icon as={FaInstagram} boxSize={4} mr="3" />
            </Link>
            <Link>
              <Icon as={FaFacebookSquare} boxSize={4} mr="2" />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactsHeader;
