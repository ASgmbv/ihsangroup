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
  Img,
  Alert,
  AlertIcon,
  Spinner,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import NextLink from "next/link";
import { queryLastTwoNews } from "@/queries";
import { format } from "date-fns";
import { useQuery } from "react-query";

const FooterLink = ({ children, href = "/" }) => {
  return (
    <ListItem
      _hover={{
        color: "white",
      }}
      color="#81ADA5"
    >
      <NextLink href={href} passHref>
        <Link>
          <ListIcon as={MdChevronRight} />
          {children}
        </Link>
      </NextLink>
    </ListItem>
  );
};

const Post = ({ id, date, title, image }) => {
  return (
    <Flex>
      <NextLink href={`/news/${id}`}>
        <a>
          <Img
            src={image}
            objectFit="cover"
            boxSize={["70px", null, "90px"]}
            mr="4"
          />
        </a>
      </NextLink>
      <Stack width="300px" spacing="1">
        <NextLink href={`/news/${id}`} passHref>
          <Link
            color="#81ADA5"
            lineHeight="short"
            _hover={{ textDecoration: "underline" }}
          >
            {title}
          </Link>
        </NextLink>
        <Text color="saryy">{format(new Date(date), "dd.MM.yyyy")}</Text>
      </Stack>
    </Flex>
  );
};

const Footer = () => {
  const { data: posts, isLoading, isError } = useQuery(
    "lastTwoNewsPosts",
    queryLastTwoNews
  );

  return (
    <>
      <Box as="footer" bg="jashyl">
        <Container maxW="container.lg2" py="10">
          <Flex
            justifyContent="space-between"
            flexDir={["column", null, null, "row"]}
          >
            <Stack spacing="6">
              <Box width="80px">
                <Image
                  src="/logo-gold.svg"
                  alt="Логотип компании"
                  objectFit="cover"
                />
              </Box>
              <Text maxW={["full", null, "300px"]} color="#81ADA5">
                Жилищный Кооператив Ихсан - это добровольное объединение людей,
                с целью совместного удовлетворения потребностей членов
                Кооператива в недвижимом имуществе и покупке жилья.
              </Text>
            </Stack>
            <Stack spacing="4">
              <Flex fontSize="lg" mt={[10, null, null, 0]} color="#81ADA5">
                Последние новости
              </Flex>
              {isError ? (
                <Alert status="error">
                  <AlertIcon />
                  Ошибка при загрузке
                </Alert>
              ) : isLoading ? (
                <Spinner color="saryy" mx="auto" />
              ) : (
                posts.map(({ title, date, image, id }) => (
                  <Post
                    key={id}
                    id={id}
                    title={title}
                    date={date}
                    image={image}
                  />
                ))
              )}
            </Stack>
            <List spacing="4" mt={[10, null, null, 0]}>
              <ListItem fontSize="lg" color="#81ADA5">
                О кооперативе
              </ListItem>
              <FooterLink href="/about">О Нас</FooterLink>
              <FooterLink href="/guarantees">Почему Мы</FooterLink>
              <FooterLink href="/reviews">Отзывы</FooterLink>
              <FooterLink href="/news">Новости</FooterLink>
              <FooterLink href="/guarantees">Сертификаты</FooterLink>
            </List>
            <List spacing="4" mt={[10, null, null, 0]}>
              <ListItem fontSize="lg" color="#81ADA5">
                Наши Услуги
              </ListItem>
              <FooterLink href="/plans">Программы</FooterLink>
              <FooterLink href="/guarantess">Гарантии</FooterLink>
              <FooterLink href="/about">Преимущества</FooterLink>
              <FooterLink href="/plans">Условия</FooterLink>
              <FooterLink href="/guarantess">Частые Вопросы</FooterLink>
            </List>
          </Flex>
        </Container>
      </Box>
      <Box bg="jashyl" borderTop="1px solid" borderColor="whiteAlpha.400">
        <Container maxW="container.lg2" py="4">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDir={["column", null, "row"]}
          >
            <Stack direction="row" spacing="6" my="2">
              <Link
                href="https://www.facebook.com/ZhoomartTaalaibekov"
                isExternal
              >
                <Flex
                  borderRadius="5000px"
                  bg="white"
                  boxSize={7}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon as={FaFacebookF} boxSize={4} color="#007361" />
                </Flex>
              </Link>
              <Link href="https://www.instagram.com/ihsangroup.kg" isExternal>
                <Flex
                  borderRadius="5000px"
                  bg="white"
                  boxSize={7}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon as={FaInstagram} boxSize={4} color="#007361" />
                </Flex>
              </Link>
            </Stack>
            <Text my="2" color="#81ADA5">
              Ihsangroup © {new Date().getFullYear()} все права защищены
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
