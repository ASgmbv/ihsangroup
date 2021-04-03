import Callback from "@/components/Callback";
import Layout from "@/components/Layout";
import {
  Box,
  Image,
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  Stack,
  List,
  ListItem,
  ListIcon,
  AspectRatio,
  Skeleton,
  SkeletonText,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { FaCaretRight } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import SectionHeader from "@/components/SectionHeader";
import { useEffect, useState } from "react";
import { queryTeamMembers } from "@/queries";

const useMembersApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await queryTeamMembers();
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

const Plans = () => {
  const { data: teamMembers, isLoading, isError } = useMembersApi();

  return (
    <Layout title="Об Ихсан Групп">
      <SectionHeader>Об Ихсан Групп</SectionHeader>
      {/**---------------------- */}
      <Flex py={["50px", null, null, "100px"]}>
        <Container maxW="container.lg2">
          <Grid
            templateColumns={["1fr", null, null, "1fr 1fr"]}
            gap={[0, null, null, 20]}
          >
            <Flex>
              <Image
                src="/gl.jpeg"
                alt="Ихсан Групп"
                objectFit="cover"
                w="full"
                display={["none", null, null, "block"]}
              />
            </Flex>
            <Stack direction="column" spacing="6">
              <Text color="saryy" letterSpacing="widest" fontSize="sm">
                МИССИЯ КООПЕРАТИВА
              </Text>
              <Heading color="jashyl" fontWeight="500" size="xl">
                Ихсан Групп — доступное <br /> жилье для каждого!
              </Heading>
              <Text lineHeight="tall">
                Жилищный Кооператив Ихсан - это добровольное объединение людей,
                с целью совместного удовлетворения потребностей членов
                Кооператива в недвижимом имуществе и покупке жилья.
              </Text>
              <Text color="jashyl" lineHeight="tall">
                Наш кооператив осуществляет свою деятельность в соответствии с
                законами Кыргызской Республики №70 «О кооперативах» от
                30.04.2004 года и №111 «О некоммерческих организациях» от
                15.12.1999 года, согласно которым единственным конституционным
                документом Жилищного кооператива является его Устав,
                утвержденный на собрании пайщиков.
              </Text>
            </Stack>
          </Grid>
        </Container>
      </Flex>
      {/**---------------------- */}
      <Box pb={["50px", null, "100px"]}>
        <Container maxW="container.lg2" d="flex" justifyContent="center">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=J1A35wtWBac&ab_channel=IHSANGroupLtd%D0%9D%D0%96%D0%9A"
            width="50%"
            height="500px"
          />
        </Container>
      </Box>
      {/**---------------------- */}
      <Box py={["50px", null, "100px"]} bg="#F7F8F6">
        <Container maxW="container.lg2">
          <Flex flexDir="column" alignItems="center">
            <Text color="saryy" letterSpacing="widest" fontSize="sm" mb="10">
              НАШИ ПРОГРАММЫ
            </Text>
            <Heading
              color="jashyl"
              fontWeight="500"
              size="xl"
              textAlign="center"
              mb="14"
            >
              Все что нужно знать о нас
            </Heading>
            <Grid
              templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
              gap={[10, null, 16]}
            >
              <List spacing="5">
                <ListItem fontSize="xl" fontWeight="500" color="saryy">
                  <ListIcon as={MdCheck} color="saryy" boxSize="7" />
                  Выгодные условия
                </ListItem>
                <GridItem>рассрочка на 10 лет с 0% на покупку жилья</GridItem>
                <GridItem>самый минимальный первоначальный взнос 5%</GridItem>
                <GridItem>самый минимальный паевый взнос 25%</GridItem>
                <GridItem>
                  после погашения основного долга, членский взнос погашается
                </GridItem>
              </List>
              <List spacing="5">
                <ListItem fontSize="xl" fontWeight="500" color="saryy">
                  <ListIcon as={MdCheck} color="saryy" boxSize="7" />
                  Гарантированная безопасность
                </ListItem>
                <GridItem>
                  финансовая гарантия государственная и юридическая защита
                </GridItem>
                <GridItem>согласованное управление</GridItem>
                <GridItem>фиксированный курс</GridItem>
                <GridItem>страхование документов</GridItem>
              </List>
              <List spacing="5">
                <ListItem fontSize="xl" fontWeight="500" color="saryy">
                  <ListIcon as={MdCheck} color="saryy" boxSize="7" />
                  Полный спектр услуг
                </ListItem>
                <GridItem>минимальный пакет документов</GridItem>
                <GridItem>легкие этапы приобретения</GridItem>
                <GridItem>лучшие программы только для вас</GridItem>
                <GridItem>
                  гибкая система графика оплаты и специальные акции
                </GridItem>
                <GridItem>бесплатная юридическая поддержка</GridItem>
              </List>
              <List spacing="5">
                <ListItem fontSize="xl" fontWeight="500" color="saryy">
                  <ListIcon as={MdCheck} color="saryy" boxSize="7" />
                  Уникальные возможности
                </ListItem>
                <GridItem>
                  сотрудничество со строительной компанией Эмаком
                </GridItem>
                <GridItem>бартерная форма расчета</GridItem>
                <GridItem>
                  после паевого взноса, максимум 4 месяца на приобретение
                  квартиры
                </GridItem>
              </List>
            </Grid>
          </Flex>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box py={["50px", null, "100px"]}>
        <Container maxW="container.lg2">
          <Flex flexDir="column" alignItems="center">
            <Text color="saryy" letterSpacing="widest" fontSize="sm" mb="10">
              НАШИ СПЕЦИАЛИСТЫ
            </Text>
            <Heading
              color="jashyl"
              fontWeight="500"
              size="xl"
              textAlign="center"
              mb="14"
            >
              Команда Ихсан Групп, <br /> команда специалистов
            </Heading>
          </Flex>
          {isError ? (
            <Alert status="warning" mx="auto" maxW="400px">
              <AlertIcon />
              Ошибка при загрузке
            </Alert>
          ) : (
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                null,
                null,
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap="50px"
            >
              {isLoading ? (
                <>
                  <SkeletonTeamMember />
                  <SkeletonTeamMember />
                  <SkeletonTeamMember />
                </>
              ) : (
                teamMembers.map(({ name, description, photo }) => (
                  <Member
                    key={name}
                    name={name}
                    description={description}
                    photo={photo}
                  />
                ))
              )}
            </Grid>
          )}
        </Container>
      </Box>
      {/**---------------------- */}
      <Box pb="100px">
        <Container maxW="container.lg2">
          <Callback />
        </Container>
      </Box>
    </Layout>
  );
};

const Member = ({ photo, name, description }) => (
  <Flex flexDirection="column">
    <AspectRatio ratio={3 / 2} w="full">
      <Image src={photo} />
    </AspectRatio>
    <Flex flexDirection="column" p="4" bg="jashyl">
      <Heading color="white" fontWeight="semibold" size="md">
        {name}
      </Heading>
      <Text color="white">{description}</Text>
    </Flex>
  </Flex>
);

const GridItem = ({ children }) => {
  return (
    <ListItem>
      <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
      {children}
    </ListItem>
  );
};

const SkeletonTeamMember = () => (
  <Flex flexDir="column">
    <AspectRatio ratio={3 / 2} w="full">
      <Skeleton width="100%" height="100%" />
    </AspectRatio>
    <SkeletonText mt="4" noOfLines={2} spacing="4" />
  </Flex>
);

export default Plans;
