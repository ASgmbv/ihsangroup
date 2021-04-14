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
  Wrap,
  WrapItem,
  Image,
  DrawerFooter,
  Stack,
  DrawerHeader,
  Button,
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
import NextLink from "next/link";

const ContactsHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const currentPathname = router.pathname;

  return (
    <Box bg="#EFF1ED" pos="relative">
      <Container maxW="container.lg2" py="3">
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <NextLink href="/">
            <a>
              <Image
                src="/logo.svg"
                alt="Логотип компании"
                width="60px"
                height="40px"
                display={["block", null, null, "none"]}
              />
            </a>
          </NextLink>

          <Flex
            justify="space-between"
            align="flex-start"
            h="full"
            w="full"
            display={["none", null, null, "flex"]}
          >
            <Wrap align="flex-start" spacing={[2, null, 4]}>
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
                <PhoneLink phoneNumber="+996700005151">
                  +996 700 00 51 51
                </PhoneLink>
              </WrapItem>
              <WrapItem>
                <PhoneLink phoneNumber="+996778005151">
                  +996 778 00 51 51
                </PhoneLink>
              </WrapItem>
              <WrapItem>
                <PhoneLink phoneNumber="+996558005353">
                  +996 558 00 53 53
                </PhoneLink>
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
                    <Link isExternal href="http://lk.ihsan.kg">
                      <CustomButton as="link">Личный кабинет</CustomButton>
                    </Link>
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

                  <DrawerFooter>
                    <Stack>
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
                          fontSize="xs"
                          fontWeight="semibold"
                          color="#444D4A"
                          _hover={{
                            color: "jashyl",
                          }}
                        >
                          Бишкек ш., Чүй/ Кулиева, БЦ “Жан-Сали”, 5-кабат.
                        </Text>
                      </Flex>

                      <PhoneLink phoneNumber="+996700005151" textSize="xs">
                        +996 700 00 51 51
                      </PhoneLink>
                      <PhoneLink phoneNumber="+996778005151" textSize="xs">
                        +996 778 00 51 51
                      </PhoneLink>
                      <PhoneLink phoneNumber="+996558005353" textSize="xs">
                        +996 558 00 53 53
                      </PhoneLink>

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
                    </Stack>
                  </DrawerFooter>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

const CustomButton = ({ children }) => {
  return (
    <Button
      lineHeight="1.2"
      borderRadius="0"
      fontSize="14px"
      fontWeight="semibold"
      bg="#D5A022"
      color="white"
      border="1px"
      borderColor="#D5A022"
      _hover={{
        bg: "white",
        color: "#D5A022",
      }}
      _active={{
        // transform: "scale(0.98)",
        borderColor: "currentColor",
      }}
    >
      {children}
    </Button>
  );
};

const PhoneLink = ({ phoneNumber, children, textSize = "sm" }) => {
  return (
    <Link href={"tel:" + phoneNumber}>
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
          fontSize={textSize}
          fontWeight="semibold"
          color="#444D4A"
          _hover={{
            color: "jashyl",
          }}
        >
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

export default ContactsHeader;
