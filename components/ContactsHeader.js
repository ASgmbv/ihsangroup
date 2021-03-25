import {
  Box,
  Container,
  Flex,
  Text,
  Icon,
  Link,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  List,
  ListItem,
  DrawerHeader,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { MdLocationCity, MdEmail } from "react-icons/md";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookSquare,
  FaBars,
} from "react-icons/fa";
import { pages } from "@/utils/website-config.js";
import PageLink from "@/components/PageLink";
import { useRouter } from "next/router";

const ContactsHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const currentPathname = router.pathname;

  return (
    <Box bg="#EFF1ED" pos="relative">
      <Container maxW="container.lg2" py="3">
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Flex
            justify="space-between"
            align="flex-start"
            h="full"
            w="full"
            flexDir={["column", null, null, "row"]}
          >
            <Wrap
              align="flex-start"
              // direction={["column", null, null, "row"]}
              spacing={[2, null, 4]}
              // mr="4"
            >
              <WrapItem>
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
                    fontWeight="semibold"
                    color="#444D4A"
                    _hover={{
                      color: "jashyl",
                    }}
                  >
                    Бишкек ш., Чүй/ Кулиева, БЦ “Жан-Сали”, 5-кабат.
                  </Text>
                </Flex>
              </WrapItem>
              <WrapItem>
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
              </WrapItem>
              <WrapItem>
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
                      +996 778 00 51 51
                    </Text>
                  </Flex>
                </Link>
              </WrapItem>
              <WrapItem>
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
                      +996 558 00 53 53
                    </Text>
                  </Flex>
                </Link>
              </WrapItem>
            </Wrap>

            <Flex display={["none", null, null, "flex"]}>
              <Link>
                <Icon
                  as={FaInstagram}
                  _hover={{ color: "jashyl" }}
                  color="#444D49"
                  boxSize={4}
                  mr="5"
                />
              </Link>
              <Link>
                <Icon
                  _hover={{ color: "jashyl" }}
                  as={FaFacebookSquare}
                  color="#444D49"
                  boxSize={4}
                  mr="5"
                />
              </Link>
              <Link>
                <Icon
                  as={MdEmail}
                  _hover={{ color: "jashyl" }}
                  color="#444D49"
                  boxSize={4}
                />
              </Link>
            </Flex>
          </Flex>
          <Box display={["block", null, null, "none"]}>
            <Icon
              as={FaBars}
              boxSize="5"
              onClick={onOpen}
              color="blackAlpha.700"
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    <Flex>
                      <Link>
                        <Icon
                          as={FaInstagram}
                          _hover={{ color: "jashyl" }}
                          color="#444D49"
                          boxSize={4}
                          mr="5"
                        />
                      </Link>
                      <Link>
                        <Icon
                          _hover={{ color: "jashyl" }}
                          as={FaFacebookSquare}
                          color="#444D49"
                          boxSize={4}
                          mr="5"
                        />
                      </Link>
                      <Link>
                        <Icon
                          as={MdEmail}
                          _hover={{ color: "jashyl" }}
                          color="#444D49"
                          boxSize={4}
                        />
                      </Link>
                    </Flex>
                  </DrawerHeader>
                  <DrawerBody display="flex">
                    <List spacing="8" my="auto">
                      {pages.map(({ title, pathname }, index) => (
                        <ListItem key={"page-link-" + index}>
                          <PageLink
                            pathname={pathname}
                            currentPathname={currentPathname}
                          >
                            {title}
                          </PageLink>
                        </ListItem>
                      ))}
                    </List>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactsHeader;
