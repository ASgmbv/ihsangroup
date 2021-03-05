import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  Stack,
  Link,
  Icon,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const isGreen = pathname === "/";

  return (
    <>
      <Box as="footer" bg={isGreen ? "#006754" : "#EFF1ED"}>
        <Container maxW="container.xl" py="10">
          <Flex
            justifyContent="space-between"
            color={isGreen ? "white" : "gray.700"}
          >
            <Stack spacing="6">
              <Image src="23.png" h="68px" w="115px" />
              <Text maxW="300px">
                Жилищный Кооператив Ихсан - это добровольное объединение людей,
                с целью совместного удовлетворения потребностей членов
                Кооператива в недвижимом имуществе и покупке жилья.
              </Text>
              <Stack direction="row" spacing="6">
                <Link>
                  <Icon as={FaFacebook} boxSize={4} />
                </Link>
                <Link>
                  <Icon as={FaTwitter} boxSize={4} />
                </Link>
                <Link>
                  <Icon as={FaInstagram} boxSize={4} />
                </Link>
                <Link>
                  <Icon as={FaLinkedin} boxSize={4} />
                </Link>
              </Stack>
            </Stack>
            <Flex color={isGreen ? "white" : "jashyl"} fontSize="lg">
              Последние новости
            </Flex>
            <List spacing="4">
              <ListItem color={isGreen ? "white" : "jashyl"} fontSize="lg">
                О кооперативе
              </ListItem>
              <ListItem>
                <NextLink href="/about" passHref>
                  <Link>
                    <ListIcon as={MdChevronRight} />О Нас
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <ListIcon as={MdChevronRight} />
                Почему Мы
              </ListItem>
              <ListItem>
                <NextLink href="/reviews" passHref>
                  <Link>
                    <ListIcon as={MdChevronRight} />
                    Отзывы
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <ListIcon as={MdChevronRight} />
                Новости
              </ListItem>
              <ListItem>
                <ListIcon as={MdChevronRight} />
                Сертификаты
              </ListItem>
            </List>
            <List spacing="4">
              <ListItem color={isGreen ? "white" : "jashyl"} fontSize="lg">
                Наши Услуги
              </ListItem>
              <ListItem>
                <NextLink href="/plans" passHref>
                  <Link>
                    <ListIcon as={MdChevronRight} />
                    Программы
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/guarantess">
                  <Link>
                    <ListIcon as={MdChevronRight} />
                    Гарантии
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <ListIcon as={MdChevronRight} />
                Преимущества
              </ListItem>
              <ListItem>
                <ListIcon as={MdChevronRight} />
                Условия
              </ListItem>
              <ListItem>
                <ListIcon as={MdChevronRight} />
                Частые Вопросы
              </ListItem>
            </List>
          </Flex>
        </Container>
      </Box>
      {isGreen ? null : (
        <Box bg="#EEC643">
          <Container maxW="container.xl" py="4">
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                Сделано в
                <Image src="/24.png" />
              </Flex>
              <Text>
                Ihsangroup © 2020 <br /> все права защищены
              </Text>
            </Flex>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Footer;
