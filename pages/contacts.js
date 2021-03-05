import Layout from "@/components/Layout";
import {
  Box,
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  Stack,
  List,
  ListItem,
  ListIcon,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Contacts = () => {
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
                Контакты
              </Heading>
            </Flex>
          </Container>
        </Box>
      </Flex>
      {/**---------------------- */}
      <Container maxW="container.xl" py="100px">
        <Grid templateColumns="40% auto" gap="10">
          <Box>
            <Heading mb="10" fontWeight="500" color="jashyl">
              Адрес
            </Heading>
            <Stack spacing="4" bg="#F0F2EE" p="10" color="jashyl">
              <List spacing="3">
                <ListItem>
                  <Text fontSize="2xl" color="saryy" fontWeight="semibold">
                    Бишкек
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdLocationOn} color="saryy" />
                  ул.Боконбаева 113, БЦ Альтаир 5
                </ListItem>
                <ListItem>
                  <ListIcon as={MdPhone} color="saryy" />0 700 00 51 51
                </ListItem>
                <ListItem>
                  <ListIcon as={MdPhone} color="saryy" />0 707 00 51 51
                </ListItem>
                <ListItem>
                  <ListIcon as={MdPhone} color="saryy" />0 778 00 51 51
                </ListItem>
                <ListItem>
                  <ListIcon as={MdEmail} color="saryy" />
                  info@ihsangroup.com
                </ListItem>
              </List>

              <List spacing="3">
                <ListItem>
                  <Text fontSize="2xl" color="saryy" fontWeight="semibold">
                    Ош
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdLocationOn} color="saryy" />
                  Курманжан-Датка 310, ориентир заправка “Ош Ойл” Шейид-Добо
                </ListItem>
                <ListItem>
                  <ListIcon as={MdPhone} color="saryy" />0 700 00 51 50
                </ListItem>
                <ListItem>
                  <ListIcon as={MdPhone} color="saryy" />0 500 00 51 50
                </ListItem>
                <ListItem>
                  <ListIcon as={MdPhone} color="saryy" />0 222 00 51 50
                </ListItem>
                <ListItem>
                  <ListIcon as={MdEmail} color="saryy" />
                  info@ihsangroup.com
                </ListItem>
              </List>
            </Stack>
          </Box>
          <Box>
            <Heading mb="10" fontWeight="500" color="jashyl">
              Обратный звонок
            </Heading>
            <Stack spacing="6">
              <Input
                variant="flushed"
                bg="#EFF1ED"
                p="6"
                placeholder="Фамилия Имя:"
              />
              <Input
                variant="flushed"
                bg="#EFF1ED"
                p="6"
                placeholder="Номер Телефона:"
              />
              <Textarea
                variant="flushed"
                p="6"
                bg="#EFF1ED"
                placeholder="Сообщение:"
              />
              <CustomButton>Отправить &#62;</CustomButton>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </Layout>
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
