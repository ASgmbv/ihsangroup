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
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { queryLastTwoNews } from "@/queries";
import { format } from "date-fns";

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

const useDataApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await queryLastTwoNews();
        setData(res);
      } catch (error) {
        console.log({ error });
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { data, isLoading, isError };
};

const Footer = () => {
  const { data: posts, isLoading, isError } = useDataApi();

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
                <Text>Ошибка</Text>
              ) : isLoading ? (
                <Text>Загрузка</Text>
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
              <FooterLink href="/">Почему Мы</FooterLink>
              <FooterLink href="/">Отзывы</FooterLink>
              <FooterLink href="/">Новости</FooterLink>
              <FooterLink href="/">Сертификаты</FooterLink>
            </List>
            <List spacing="4" mt={[10, null, null, 0]}>
              <ListItem fontSize="lg" color="#81ADA5">
                Наши Услуги
              </ListItem>
              <FooterLink href="/plans">Программы</FooterLink>
              <FooterLink href="/guarantess">Гарантии</FooterLink>
              <FooterLink href="/guarantess">Преимущества</FooterLink>
              <FooterLink href="/guarantess">Условия</FooterLink>
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
              <Link isExternal>
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
              <Link>
                <Flex
                  borderRadius="5000px"
                  bg="white"
                  boxSize={7}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon as={FaTwitter} boxSize={4} color="#007361" />
                </Flex>
              </Link>
              <Link>
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
              <Link>
                <Flex
                  borderRadius="5000px"
                  bg="white"
                  boxSize={7}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon as={FaLinkedin} boxSize={4} color="#007361" />
                </Flex>
              </Link>
            </Stack>
            <Text my="2" color="#81ADA5">
              Ihsangroup © {new Date().getFullYear()} все права защищены
            </Text>
            <Text my="2" color="white" fontSize="lg">
              +996 700 005 151
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
