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
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { FaCaretRight } from "react-icons/fa";
import { MdCheck } from "react-icons/md";

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
                О Нас
              </Heading>
            </Flex>
          </Container>
        </Box>
      </Flex>
      {/**---------------------- */}
      <Flex py="100px">
        <Container maxW="container.xl">
          <Grid templateColumns={["1fr", null, null, "1fr 1fr"]} gap="20">
            <Flex>
              <Image
                src="/15.png"
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
                Жилищный Кооператив Ихсан - это добровольное объединение людей,
                с целью совместного удовлетворения потребностей членов
                Кооператива в недвижимом имуществе и покупке жилья.
              </Text>
              <Text lineHeight="tall">
                В нашем офисе Вас ждет полная консультация от наших сотрудников
                о программах и условиях кооператива. Также, Вы сможете
                ознакомиться с нашим Уставными документами кооператива в
                дружеской атмосфере.
              </Text>
            </Stack>
          </Grid>
        </Container>
      </Flex>
      {/**---------------------- */}
      <Box pb="100px">
        <Container maxW="container.xl">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
          />
        </Container>
      </Box>
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
              Все что нужно знать о нас
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap="20">
              <List spacing="5">
                <ListItem fontSize="xl" fontWeight="500" color="saryy">
                  <ListIcon as={MdCheck} color="saryy" boxSize="7" />
                  Выгодные условия
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  рассрочка на 10 лет с 0% на покупку жилья
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  самый минимальный первоначальный взнос 5%
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  самый минимальный паевый взнос 25%
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  после погашения основного долга, членский взнос погашается
                </ListItem>
              </List>
              <List spacing="5">
                <ListItem fontSize="xl" fontWeight="500" color="saryy">
                  <ListIcon as={MdCheck} color="saryy" boxSize="7" />
                  Гарантированная безопасность
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  финансовая гарантия государственная и юридическая защита
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  согласованное управление
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  фиксированный курс
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  страхование документов
                </ListItem>
              </List>
              <List spacing="5">
                <ListItem fontSize="xl" fontWeight="500" color="saryy">
                  <ListIcon as={MdCheck} color="saryy" boxSize="7" />
                  Полный спектр услуг
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  минимальный пакет документов
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  легкие этапы приобретения
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  лучшие программы только для вас
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  гибкая система графика оплаты и специальные акции
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  бесплатная юридическая поддержка
                </ListItem>
              </List>
              <List spacing="5">
                <ListItem fontSize="xl" fontWeight="500" color="saryy">
                  <ListIcon as={MdCheck} color="saryy" boxSize="7" />
                  Уникальные возможности
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  сотрудничество со строительной компанией Эмаком
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  бартерная форма расчета
                </ListItem>
                <ListItem>
                  <ListIcon boxSize="6" color="#59AA6B" as={FaCaretRight} />
                  после паевого взноса, максимум 4 месяца на приобретение
                  квартиры
                </ListItem>
              </List>
            </Grid>
          </Flex>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box pb="100px">
        <Container maxW="container.xl">
          <Callback />
        </Container>
      </Box>
    </Layout>
  );
};

export default Plans;
