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
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Alert,
  AlertIcon,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { queryPrograms } from "@/queries";
import AnimatingHeading from "@/components/AnimatingHeading";

const useProgramsApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await queryPrograms();
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
  return (
    <Layout title="Программы">
      <SectionHeader>Программы</SectionHeader>

      {/**---------------------- */}
      <Box py={["50px", null, "100px"]}>
        <Container maxW="container.lg2">
          <Flex flexDir="column" alignItems="center" overflow="hidden">
            <AnimatingHeading
              subtitle="НАШИ ПРОГРАММЫ"
              title={
                <>
                  Мы подберем программу, <br /> которая подойдет именно для вас
                </>
              }
            />

            <ProgramsTable />
          </Flex>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box bg="#F6F8F6" py={["50px", null, "100px"]}>
        <Container maxW="container.xl">
          <Flex flexDir="column" alignItems="center">
            <AnimatingHeading
              subtitle="ЭТАПЫ ПОКУПКИ"
              title={<>Всего 5 шагов к мечте!</>}
            />
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                null,
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap="10"
            >
              <Card
                title="Заключение договора"
                content="Менеджер отправляет Вам готовый договор для ознакомления и согласования."
                image="16.png"
              />
              <Card
                title="Оплата договора"
                content="После согласования договора, менеджер отправляет Вам реквизиты для его оплаты."
                image="17.png"
              />
              <Card
                title="Выбор объекта"
                content="Вам необходимо отправить паспортные данные вашему менеджеру для дальнейшего рассмотрения."
                image="18.png"
              />
              <Card
                title="Ожидания финансирования"
                content="Вам необходимо отправить паспортные данные вашему менеджеру для дальнейшего рассмотрения."
                image="19.png"
              />
              <Card
                title="Государственная регистрация"
                content="Оформления и переучет в собственность клиенту."
                image="20.png"
              />
            </Grid>
          </Flex>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box py="100px">
        <Container maxW="container.xl">
          <Callback />
        </Container>
      </Box>
    </Layout>
  );
};

const Card = ({ title, image, content, ...props }) => {
  return (
    <Flex flexDir="column" position="relative" {...props}>
      <Image
        src={image}
        objectFit="cover"
        position="absolute"
        right="50"
        top="-50px"
      />
      <Text color="jashyl" fontSize="lg" fontWeight="500" mb="3" zIndex="1">
        {title}
      </Text>
      <Text zIndex="1">{content}</Text>
    </Flex>
  );
};

const ProgramsTable = () => {
  const { data: programs, isLoading, isError } = useProgramsApi();

  if (isError) {
    return (
      <Alert status="warning" mx="auto" maxW="400px">
        <AlertIcon />
        Ошибка при загрузке
      </Alert>
    );
  }

  if (isLoading) {
    return <Spinner color="saryy" my="100px" />;
  }

  return (
    <Table
      variant="unstyled"
      sx={{
        td: {
          border: "1px solid #CBD0CD",
        },
        th: {
          border: "1px solid #CBD0CD",
        },
      }}
    >
      <Thead>
        <Tr>
          <Th
            textAlign="center"
            fontSize="md"
            textTransform="none"
            bg="jashyl"
            color="white"
          >
            Программы
          </Th>
          {programs.map((program) => (
            <Th
              key={program.name}
              textAlign="center"
              bg="jashyl"
              color="white"
              lineHeight="tall"
              fontSize="md"
              textTransform="none"
            >
              {program.name}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
            Вступительный взнос
          </Td>
          {programs.map((program) => (
            <Td bg="#F6F8F6" key={program.name}>
              {program.deposit}
            </Td>
          ))}
        </Tr>
        <Tr>
          <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
            Паевый взнос
          </Td>
          {programs.map((program) => (
            <Td bg="#F6F8F6" key={program.name}>
              {program.fee}
            </Td>
          ))}
        </Tr>
        <Tr>
          <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
            Варианты недвижимости
          </Td>
          {programs.map((program) => (
            <Td bg="#F6F8F6" key={program.name}>
              {program.realEstateTypes}
            </Td>
          ))}
        </Tr>
        <Tr>
          <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
            Сумма финансирования
          </Td>
          {programs.map((program) => (
            <Td bg="#F6F8F6" key={program.name}>
              {program.fundingAmount}
            </Td>
          ))}
        </Tr>
        <Tr>
          <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
            Срок ожидания
          </Td>
          {programs.map((program) => (
            <Td bg="#F6F8F6" key={program.name}>
              {program.waitingPeriod}
            </Td>
          ))}
        </Tr>
        <Tr>
          <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
            Срок финансирования
          </Td>
          {programs.map((program) => (
            <Td bg="#F6F8F6" key={program.name}>
              {program.financingPeriod}
            </Td>
          ))}
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th color="saryy">Примечания</Th>
          <Th colSpan="2">Частный дом постройки выше 2000-года. </Th>
          <Th colSpan="2">Квартира постройки выше 1965-года.</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default Plans;
