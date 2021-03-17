import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";

const PlansTabs = () => {
  return (
    <Box py={["50px", null, "100px"]}>
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
            Мы подберем программу, <br /> которая подойдет именно для вас
          </Heading>

          <CustomTabs />
        </Flex>
      </Container>
    </Box>
  );
};

const CustomTabs = () => {
  const variant = useBreakpointValue({ base: "horizontal", md: "vertical" });
  return (
    <Tabs orientation={variant} variant="unstyled" w="full">
      <TabList>
        <CustomTab>
          <Text d={["none", null, "block"]}>&ldquo;Популярный&ldquo;</Text>
          25 + 5
        </CustomTab>
        <CustomTab>
          <Text d={["none", null, "block"]}>&ldquo;Удобный&ldquo;</Text>
          35 + 5
        </CustomTab>
        <CustomTab>
          <Text d={["none", null, "block"]}>&ldquo;Выгодный&ldquo;</Text>
          50 + 5
        </CustomTab>
        <CustomTab>Авто</CustomTab>
      </TabList>
      <TabPanels border="1px solid" borderColor="jashyl" px={[0, null, 10]}>
        <TabPanel h="full" alignItems="center" d="flex">
          <List spacing="5">
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Вступительный взнос – 5% от стоимости недвижимости
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Паевый взнос – 35% от стоимости недвижимости
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Варианты недвижимости – Квартиры, частные дома строительство, авто
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Сумма финансирования – До 3 000 000
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Срок финансирования – 5 или 10 лет
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel h="full" alignItems="center" d="flex">
          <List spacing="5">
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Варианты недвижимости – Квартиры, частные дома строительство, авто
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Сумма финансирования – До 3 000 000
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Срок финансирования – 5 или 10 лет
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Вступительный взнос – 5% от стоимости недвижимости
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Паевый взнос – 35% от стоимости недвижимости
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel h="full" alignItems="center" d="flex">
          <List spacing="5">
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Сумма финансирования – До 3 000 000
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Срок финансирования – 5 или 10 лет
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Вступительный взнос – 5% от стоимости недвижимости
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Паевый взнос – 35% от стоимости недвижимости
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Варианты недвижимости – Квартиры, частные дома строительство, авто
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel h="full" alignItems="center" d="flex">
          <List spacing="5">
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Паевый взнос – 35% от стоимости недвижимости
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Варианты недвижимости – Квартиры, частные дома строительство, авто
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Вступительный взнос – 5% от стоимости недвижимости
            </ListItem>

            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Сумма финансирования – До 3 000 000
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FaCaretRight} color="jashyl" />
              Срок финансирования – 5 или 10 лет
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const CustomTab = ({ children, ...rest }) => {
  return (
    <Tab
      {...rest}
      flex="1"
      bg="#EFF1ED"
      color="#024701"
      fontWeight="bold"
      borderBottom="1px solid"
      borderColor="#CED3D0"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      p={[3, null, 4]}
      w="400px"
      _selected={{
        bg: "jashyl",
        color: "white",
        boxShadow: "none",
      }}
    >
      {children}
    </Tab>
  );
};

export default PlansTabs;
