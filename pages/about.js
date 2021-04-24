import Layout from "@/components/Layout";
import {
  Box,
  Image,
  Container,
  Text,
  Flex,
  Heading,
  Grid,
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
import { queryMission, queryQualities, queryTeamMembers } from "@/queries";
import AnimatingHeading from "@/components/AnimatingHeading";
import SpeechBlock from "@/components/SpeechBlock";
import { useQuery } from "react-query";

const Plans = () => {
  const {
    data: mission = {},
    isLoading: isMissionLoading,
    isError: isMissionError,
  } = useQuery("mission", queryMission);

  const { data: teamMembers, isLoading, isError } = useQuery(
    "teamMembers",
    queryTeamMembers
  );

  const {
    data: qualities = [],
    isLoading: isQualitiesLoading,
    isError: isQualitiesError,
  } = useQuery("qualities", queryQualities);

  return (
    <Layout title="Об Ихсан Групп">
      <SectionHeader>Об Ихсан Групп</SectionHeader>
      {/**---------------------- */}
      <Flex py={["50px", null, null, "100px"]}>
        <Container maxW="container.lg2">
          <SpeechBlock
            isLoading={isMissionLoading}
            isError={isMissionError}
            description={mission.description}
            photo={mission.photo}
            title={mission.title}
            name={mission.name}
          />
        </Container>
      </Flex>
      {/**---------------------- */}
      <Box pb={["50px", null, "100px"]}>
        <Container maxW="container.lg2" d="flex" justifyContent="center">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=J1A35wtWBac&ab_channel=IHSANGroupLtd%D0%9D%D0%96%D0%9A"
            width="90%"
            height="500px"
          />
        </Container>
      </Box>
      {/**---------------------- */}
      <Box py={["50px", null, "100px"]} bg="#F7F8F6">
        <Container maxW="container.lg2">
          <Flex flexDir="column" alignItems="center">
            <AnimatingHeading
              subtitle="НАШИ ПРОГРАММЫ"
              title={<>Все что нужно знать о нас</>}
            />
            <Grid
              templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
              gap={[10, null, 16]}
            >
              {isQualitiesLoading ? (
                <Text>Загрузка...</Text>
              ) : (
                qualities.map((quality, idx) => {
                  return (
                    <List spacing="5" key={idx}>
                      <ListItem fontSize="xl" fontWeight="500" color="saryy">
                        <ListIcon as={MdCheck} color="saryy" boxSize="7" />
                        {quality.title}
                      </ListItem>
                      {quality?.qualities?.split("\n")?.map((quality) => (
                        <GridItem key={quality}>{quality}</GridItem>
                      ))}
                    </List>
                  );
                })
              )}
            </Grid>
          </Flex>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box py={["50px", null, "100px"]}>
        <Container maxW="container.lg2">
          <Flex flexDir="column" alignItems="center">
            <AnimatingHeading
              subtitle="НАШИ СПЕЦИАЛИСТЫ"
              title={
                <>
                  Команда Ихсан Групп, <br /> команда специалистов
                </>
              }
            />
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
    </Layout>
  );
};

const Member = ({ photo, name, description }) => (
  <Flex flexDirection="column">
    <AspectRatio ratio={3 / 2} width="100%">
      <Image src={photo} />
    </AspectRatio>
    <Flex flexDirection="column" p="4" bg="jashyl" flex="1">
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
