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
} from "@chakra-ui/react";

const Plans = () => {
  return (
    <Layout>
      <Flex
        w="full"
        backgroundImage="url('/14.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        h={["300px"]}
        mb="100px"
      >
        <Box h="full" w="full" background="rgba(1, 87, 71,0.8)">
          <Container maxW="container.xl" h="full">
            <Flex flexDir="column" justify="center" align="center" h="full">
              <Heading
                color="white"
                size="2xl"
                fontWeight="500"
                lineHeight="1.3"
                mb="6"
              >
                Программы
              </Heading>
            </Flex>
          </Container>
        </Box>
      </Flex>

      {/**---------------------- */}
      <Box pb="100px">
        <Container maxW="container.xl">
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
              Мы подберем программу, <br /> которая подойдет именно для вас
            </Heading>

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
                  <Th
                    textAlign="center"
                    bg="jashyl"
                    color="white"
                    lineHeight="tall"
                    fontSize="md"
                    textTransform="none"
                  >
                    «Популярный» <br />{" "}
                    <Text as="span" fontWeight="bold" fontSize="xl">
                      25 + 5
                    </Text>
                  </Th>
                  <Th
                    textAlign="center"
                    bg="jashyl"
                    color="white"
                    lineHeight="tall"
                    fontSize="md"
                    textTransform="none"
                  >
                    «Удобный» <br />
                    <Text as="span" fontWeight="bold" fontSize="xl">
                      35 + 5
                    </Text>
                  </Th>
                  <Th
                    textAlign="center"
                    bg="jashyl"
                    color="white"
                    lineHeight="tall"
                    fontSize="md"
                    textTransform="none"
                  >
                    «Выгодный» <br />
                    <Text as="span" fontWeight="bold" fontSize="xl">
                      50 + 5
                    </Text>
                  </Th>
                  <Th
                    textAlign="center"
                    bg="jashyl"
                    color="white"
                    lineHeight="tall"
                    fontSize="md"
                    textTransform="none"
                  >
                    «Без взноса» <br />
                    <Text as="span" fontWeight="bold" fontSize="xl">
                      0 + 5
                    </Text>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
                    Вступительный взнос
                  </Td>
                  <Td bg="#F6F8F6">25%</Td>
                  <Td bg="#F6F8F6">35%</Td>
                  <Td bg="#F6F8F6">50%</Td>
                  <Td bg="#F6F8F6">5%</Td>
                </Tr>
                <Tr>
                  <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
                    Паевый взнос
                  </Td>
                  <Td bg="#F6F8F6">5%</Td>
                  <Td bg="#F6F8F6">5%</Td>
                  <Td bg="#F6F8F6">5%</Td>
                  <Td bg="#F6F8F6">25% / 35% / 50% путем паенакопления</Td>
                </Tr>
                <Tr>
                  <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
                    Варианты недвижимости
                  </Td>
                  <Td bg="#F6F8F6">Квартиры, частные дома</Td>
                  <Td bg="#F6F8F6">
                    Квартиры, частные дома, строительство, авто
                  </Td>
                  <Td bg="#F6F8F6">
                    Квартиры, частные дома, строительство, авто
                  </Td>
                  <Td bg="#F6F8F6">Квартиры, частные дома</Td>
                </Tr>
                <Tr>
                  <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
                    Сумма финансирования
                  </Td>
                  <Td bg="#F6F8F6">от $15000 до $65000</Td>
                  <Td bg="#F6F8F6">от $15000 до $65000</Td>
                  <Td bg="#F6F8F6">от $15000 до $65000</Td>
                  <Td bg="#F6F8F6">от $15000 до $65000</Td>
                </Tr>
                <Tr>
                  <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
                    Срок ожидания
                  </Td>
                  <Td bg="#F6F8F6">от 8 до 12 месяцев</Td>
                  <Td bg="#F6F8F6">от 4 до 6 месяцев</Td>
                  <Td bg="#F6F8F6">от 1 до 2 месяцев</Td>
                  <Td bg="#F6F8F6">
                    до паенакопления в размере 25% / 35% / 50%
                  </Td>
                </Tr>
                <Tr>
                  <Td bg="#F6F8F6" color="jashyl" fontWeight="500">
                    Срок финансирования
                  </Td>
                  <Td bg="#F6F8F6">до 10 лет</Td>
                  <Td bg="#F6F8F6">до 10 лет</Td>
                  <Td bg="#F6F8F6">до 10 лет</Td>
                  <Td bg="#F6F8F6">до 10 лет</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th color="saryy">Примечания</Th>
                  <Th colspan="2">Частный дом постройки выше 2000-года. </Th>
                  <Th colspan="2">Квартира постройки выше 1965-года.</Th>
                </Tr>
              </Tfoot>
            </Table>
          </Flex>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box bg="#F6F8F6" py="100px">
        <Container maxW="container.xl">
          <Flex flexDir="column" alignItems="center">
            <Text color="saryy" letterSpacing="widest" fontSize="sm" mb="10">
              ЭТАПЫ ПОКУПКИ
            </Text>
            <Heading
              color="jashyl"
              fontWeight="500"
              size="xl"
              textAlign="center"
              mb="20"
            >
              Всего 5 шагов к мечте!
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap="10">
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

export default Plans;
