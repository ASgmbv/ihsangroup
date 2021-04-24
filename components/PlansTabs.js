import {
  Container,
  Box,
  Flex,
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
  Skeleton,
  SkeletonText,
  HStack,
  AspectRatio,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import { queryPrograms } from "@/queries";
import AnimatingHeading from "@/components/AnimatingHeading";
import { useQuery } from "react-query";

const PlansTabs = () => {
  return (
    <Box py={["50px", null, "100px"]}>
      <Container maxW="container.lg2">
        <Flex flexDir="column" alignItems="center">
          <AnimatingHeading
            title={
              <>
                Мы подберем программу, <br /> которая подойдет именно для вас
              </>
            }
            subtitle="НАШИ ПРОГРАММЫ"
          />
          <CustomTabs />
        </Flex>
      </Container>
    </Box>
  );
};

const CustomTabs = () => {
  const variant = useBreakpointValue({ base: "horizontal", md: "vertical" });
  const { data: programs, isLoading, isError } = useQuery(
    "programs",
    queryPrograms
  );

  if (isError) {
    return (
      <Alert status="warning" mx="auto" maxW="400px">
        <AlertIcon />
        Ошибка при загрузке
      </Alert>
    );
  }

  if (isLoading) {
    return <SkeletonProgram />;
  }

  return (
    <Tabs orientation={variant} variant="unstyled" width="100%">
      <TabList>
        {programs.map((program) => (
          <CustomTab key={program.name}>
            <Text d={["none", null, null, "block"]}>{program.name}</Text>
            <Text d={["block", null, null, "none"]}>
              {program.deposit + " + " + program.fee}
            </Text>
          </CustomTab>
        ))}
      </TabList>
      <TabPanels border="1px solid" borderColor="jashyl" px={[0, null, 10]}>
        {programs.map((program) => (
          <TabPanel h="full" alignItems="center" d="flex" key={program.name}>
            <List spacing="5">
              <ListItem fontSize="lg">
                <ListIcon as={FaCaretRight} color="jashyl" />
                {"Варианты недвижимости – " + program.realEstateTypes}
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={FaCaretRight} color="jashyl" />
                {"Сумма финансирования – " + program.fundingAmount}
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={FaCaretRight} color="jashyl" />
                {"Срок рассрочки – " + program.financingPeriod}
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={FaCaretRight} color="jashyl" />
                {"Единоразовая коммисия – " + program.deposit}
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={FaCaretRight} color="jashyl" />
                {"Первоначальный взнос – " + program.fee}
              </ListItem>
            </List>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

const SkeletonProgram = () => (
  <HStack width="100%" spacing="10">
    <AspectRatio maxW="400px" width="100%" ratio={2 / 1}>
      <Skeleton />
    </AspectRatio>
    <SkeletonText noOfLines={5} spacing="8" flex="1" />
  </HStack>
);

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
