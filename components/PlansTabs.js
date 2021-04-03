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
  Skeleton,
  SkeletonText,
  HStack,
  AspectRatio,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { queryPrograms } from "@/queries";

const MotionText = motion(Text);
const MotionHeading = motion(Heading);

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

const PlansTabs = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <Box py={["50px", null, "100px"]}>
      <Container maxW="container.lg2">
        <Flex flexDir="column" alignItems="center">
          <MotionText
            variants={variants}
            animate={animation}
            transition={{ duration: 1.5 }}
            ref={ref}
            color="saryy"
            letterSpacing="widest"
            fontSize="sm"
            mb="10"
          >
            НАШИ ПРОГРАММЫ
          </MotionText>

          <MotionHeading
            variants={variants}
            animate={animation}
            transition={{ duration: 1.5, delay: 0.5 }}
            color="jashyl"
            fontWeight="500"
            size="xl"
            textAlign="center"
            mb="14"
          >
            Мы подберем программу, <br /> которая подойдет именно для вас
          </MotionHeading>

          <CustomTabs />
        </Flex>
      </Container>
    </Box>
  );
};

const CustomTabs = () => {
  const variant = useBreakpointValue({ base: "horizontal", md: "vertical" });
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
                {/* Варианты недвижимости – Квартиры, частные дома строительство, авто */}
                {"Варианты недвижимости – " + program.realEstateTypes}
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={FaCaretRight} color="jashyl" />
                {/* Сумма финансирования – До 3 000 000 */}
                {"Сумма финансирования – " + program.fundingAmount}
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={FaCaretRight} color="jashyl" />
                {/* Срок финансирования – 5 или 10 лет */}
                {"Срок финансирования – " + program.financingPeriod}
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={FaCaretRight} color="jashyl" />
                {/* Вступительный взнос – 4% от стоимости недвижимости */}
                {"Вступительный взнос – " + program.deposit}
              </ListItem>
              <ListItem fontSize="lg">
                <ListIcon as={FaCaretRight} color="jashyl" />
                {/* Паевый взнос – 35% от стоимости недвижимости */}
                {"Паевый взнос – " + program.fee}
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
