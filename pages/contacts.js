import Layout from "@/components/Layout";
import {
  Box,
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";

const branches = [
  {
    image: "/building.png",
    title: "БЦ Жан-Сали",
    address: "Бишкек ш., Чүй/ Кулиева, БЦ “Жан-Сали”, 5-кабат.",
    email: "info@ihsan.kg",
    phoneNumbers: [
      "+996(700) 00 51 51",
      "+996(707) 00 51 51",
      "+996(558) 00 53 53",
      "+996(778) 00 51 51",
    ],
  },
  {
    image: "/building.png",
    title: "БЦ “Альтаир",
    address: "Бишкек ш., Ж. Бөкөмбаев көч. 113, БЦ “Альтаир”, 5-кабат.",
    email: "info@ihsan.kg",
    phoneNumbers: ["+996 701 100 200", "+996 701 100 200", "+996 701 100 200"],
  },

  {
    image: "/building.png",
    title: "ТЦ Глобус",
    address:
      'Ош ш., А. Шакиров көч., 275/364. ( Болжол "Нурзаман",ТЦ "Глобус")',
    email: "info@ihsan.kg",
    phoneNumbers: [
      "+996(553) 02 09 68",
      "+996(707) 31 61 72",
      "+996(700) 00 51 50",
      "+996(500) 00 51 50",
      "+996(222) 00 51 50",
    ],
  },
  {
    image: "/building.png",
    title: "БЦ Plaza",
    address: 'Жалал-Абад ш., Токтогул көч., 34, БЦ "Plaza"',
    email: "info@ihsan.kg",
    phoneNumbers: [],
  },
];

const Contacts = () => {
  return (
    <Layout title="Контакты">
      <Flex
        w="full"
        backgroundImage="url('/14.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        h={["300px"]}
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
                Контакты
              </Heading>
            </Flex>
          </Container>
        </Box>
      </Flex>
      {/**---------------------- */}
      <Container maxW="container.xl" py={["50px", null, "100px"]}>
        <Stack spacing="10">
          {branches.map(({ title, image, address, email, phoneNumbers }) => (
            <Card
              key={address}
              image={image}
              title={title}
              address={address}
              email={email}
              phoneNumbers={phoneNumbers}
            />
          ))}
        </Stack>
      </Container>
    </Layout>
  );
};

const Card = ({ image, title, address, email, phoneNumbers }) => {
  return (
    <Flex flexDir={["column", null, "row"]}>
      <Image
        src={image}
        w="30%"
        objectFit="cover"
        display={["none", null, null, "block"]}
      />
      <Flex flex="1" bg="boz" flexDir="column" padding={[4, null, 6]}>
        <Heading
          mb="4"
          fontWeight="semibold"
          fontSize={["lg", null, "25px"]}
          color="jashyl"
        >
          {title}
        </Heading>
        <Grid
          templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]}
          gap={[4, null, 10]}
          color="#585858"
        >
          <Stack>
            <Text color="saryy">Адрес:</Text>
            <Text>{address}</Text>
          </Stack>
          <Stack>
            <Text color="saryy">Телефон:</Text>
            {phoneNumbers.map((pn, idx) => (
              <Text key={"pn-" + idx}>{pn} </Text>
            ))}
          </Stack>
          <Stack>
            <Text color="saryy">Е-мейл:</Text>
            <Text>{email}</Text>
          </Stack>
        </Grid>
      </Flex>
    </Flex>
  );
};

const CustomButton = ({ children }) => {
  return (
    <Button
      size="lg"
      w="fit-content"
      lineHeight="1.2"
      borderRadius="0"
      fontSize="14px"
      fontWeight="semibold"
      bg="transparent"
      color="saryy"
      border="1px"
      borderColor="#D5A022"
      _hover={{
        bg: "#D5A022",
        color: "white",
      }}
      _active={{
        borderColor: "currentColor",
      }}
    >
      {children}
    </Button>
  );
};

export default Contacts;
