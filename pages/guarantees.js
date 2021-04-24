import AnimatingHeading from "@/components/AnimatingHeading";
import Layout from "@/components/Layout";
import LoadingError from "@/components/LoadingError";
import SpeechBlock from "@/components/SpeechBlock";
import {
  queryExpertOpinion,
  queryFAQs,
  queryGuarantees,
} from "@/utils/queries";
import {
  Box,
  Image,
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Divider,
  AspectRatio,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useQuery } from "react-query";
import SectionHeader from "../components/SectionHeader";

const Guarantees = () => {
  const {
    data: expertOpinion = {},
    isLoading: isExpertOpinionLoading,
    isError: isExpertOpinionError,
  } = useQuery("expertOpinion", queryExpertOpinion);

  return (
    <Layout title="Гарантии">
      <SectionHeader>Гарантии</SectionHeader>
      {/**---------------------- */}
      <Flex py={["50px", null, "100px"]}>
        <Container maxW="container.lg2">
          <SpeechBlock
            isError={isExpertOpinionError}
            isLoading={isExpertOpinionLoading}
            description={expertOpinion.description}
            title={expertOpinion.title}
            photo={expertOpinion.photo}
            name={expertOpinion.name}
          />
        </Container>
      </Flex>
      {/**---------------------- */}
      <Box bg="#F6F8F6">
        <Container maxW="container.lg2" py={["50px", null, "100px"]}>
          <Flex flexDir="column" alignItems="center">
            <AnimatingHeading
              subtitle="ГАРАНТИИ"
              title={<>С нами безопасно!</>}
            />
            <CustomGrid />
          </Flex>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box>
        <Container maxW="container.lg2" py={["50px", null, "100px"]}>
          <Flex flexDir="column" alignItems="center">
            <AnimatingHeading
              subtitle="ГАРАНТИИ"
              title={
                <>
                  С нами вы инвестируете с свою <br /> финансовую безопасность
                </>
              }
            />
          </Flex>
          <FAQs />
        </Container>
      </Box>
      {/**---------------------- */}
      <Box>
        <Container maxW="container.lg2" pb={["50px", null, "100px"]}>
          <Heading
            color="jashyl"
            fontWeight="500"
            size="xl"
            textAlign="center"
            mb="14"
          >
            Награды и Сертификаты
          </Heading>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              null,
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            w="full"
            bg="boz"
            gap={[5, null, 10]}
            p={["20px", null, "50px"]}
          >
            {certificates.map(({ image, title }) => (
              <Certificate key={image} image={image} title={title} />
            ))}
          </Grid>
        </Container>
      </Box>

      {/**---------------------- */}
    </Layout>
  );
};

const FAQs = () => {
  const { data: faqs, isLoading, isError } = useQuery("faqs", queryFAQs);

  if (isError) {
    return <LoadingError />;
  }

  if (isLoading) {
    return (
      <Flex justifyContent="center">
        <Spinner mx="auto" />
      </Flex>
    );
  }

  return (
    <Accordion allowToggle={true}>
      {faqs.map(({ question, answer }) => (
        <AccordionItem key={question}>
          <AccordionButton
            justifyContent="space-between"
            py="4"
            color="text"
            _expanded={{
              color: "jashyl",
            }}
          >
            <Flex alignItems="center" justifyContent="flex-start">
              <Icon as={BsQuestionCircleFill} mr="3" color="saryy" />
              <Text textAlign="start">{question}</Text>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pt="0">
            <Divider variant="dashed" />
            <Text lineHeight="taller" color="text">
              {answer}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const certificates = [
  {
    image: "/certificate.png",
    title: "Свидетельство о Государственной регистрации юридического лица",
  },
];

const Certificate = ({ image, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="relative" w="full">
      <Image
        src={image}
        w="full"
        objectFit="cover"
        onClick={onOpen}
        alt={title}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} w="full" objectFit="cover" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const Card = ({ icon, title, content, ...props }) => {
  return (
    <Flex
      border="1px solid"
      width="100%"
      borderColor="gray.200"
      p={[3, null, 5]}
      _hover={{
        bg: "white",
        transform: "scale(1.05)",
      }}
      transition="transform 0.1s"
      {...props}
    >
      <Image src={icon} boxSize={["30px", null, "40px"]} objectFit="cover" />
      <Flex flexDir="column" ml="6">
        <Heading as="h3" size="md" color="jashyl" mb="3" fontWeight="semibold">
          {title}
        </Heading>
        <Text lineHeight="tall" color="gray.600">
          {content}
        </Text>
      </Flex>
    </Flex>
  );
};

const CustomGrid = (props) => {
  const { data: guarantees, isLoading, isError } = useQuery(
    "guarantees",
    queryGuarantees
  );

  if (isError) {
    return <LoadingError mb="50px" />;
  }

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        null,
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={[4, null, 10]}
      width="100%"
      {...props}
    >
      {isLoading
        ? [0, 1, 3].map((el) => <SkeletonGuarantee key={"guarantee-" + el} />)
        : guarantees.map((guarantee) => (
            <Card
              key={guarantee.title}
              icon={guarantee.icon}
              title={guarantee.title}
              content={guarantee.description}
            />
          ))}
    </Grid>
  );
};

const SkeletonGuarantee = () => (
  <AspectRatio width="100%" ratio={7 / 4}>
    <Skeleton />
  </AspectRatio>
);

export default Guarantees;
