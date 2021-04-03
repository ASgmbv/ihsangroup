import Callback from "@/components/Callback";
import Layout from "@/components/Layout";
import LoadingError from "@/components/LoadingError";
import { queryGuarantees } from "@/utils/queries";
import {
  Box,
  Image,
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  Stack,
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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import SectionHeader from "../components/SectionHeader";

const Guarantees = () => {
  return (
    <Layout title="Гарантии">
      <SectionHeader>Гарантии</SectionHeader>
      {/**---------------------- */}
      <Flex py={["50px", null, "100px"]}>
        <Container maxW="container.lg2">
          <Grid
            templateColumns={["1fr", null, null, "1fr 1fr"]}
            gap={[0, null, null, "20"]}
          >
            <Flex>
              <Image
                src="/gl2.jpeg"
                alt="Ихсан Групп"
                objectFit="cover"
                w="full"
                display={["none", null, null, "block"]}
              />
            </Flex>
            <Stack direction="column" spacing="6">
              <Text color="saryy" letterSpacing="widest" fontSize="sm">
                МНЕНИЕ ЭКСПЕРТА
              </Text>
              <Heading color="jashyl" fontWeight="500" size="xl">
                Ихсан Групп меняет представление о покупке недвижимости
              </Heading>
              <Text lineHeight="taller">
                Рынок ипотеки становится все более цивилизованным, а нынешние
                клиенты — потенциальные заемщики — это уже не те физические
                лица, которые приходили за кредитом на недвижимость года 2
                назад.
              </Text>
              <Text lineHeight="taller">
                И данная ситуация меняется на глазах — наши дети уже с
                младенчества привыкают к терминам «ипотека» и «аннуитет», а
                также учатся планировать свой бюджет с учетом ежемесячных
                платежей. Считаю, что финансовая грамотность не может не иметь
                четких границ в своем развитии.
              </Text>
              <Text
                textAlign="end"
                fontWeight="semibold"
                fontSize="lg"
                color="#DAAC3D"
                mb="4"
              >
                Динара Заирова, Финансовый Директор
              </Text>
              <Box
                bg="#EFF1ED"
                borderLeft="3px solid"
                borderColor="saryy"
                px="8"
                py="3"
                color="#444D4A"
                fontWeight="semibold"
                fontSize="lg"
              >
                Связаться для консультации +996 700 005 151
              </Box>
            </Stack>
          </Grid>
        </Container>
      </Flex>
      {/**---------------------- */}
      <Box bg="#F6F8F6">
        <Container maxW="container.lg2" py={["50px", null, "100px"]}>
          <Flex flexDir="column" alignItems="center">
            <Text color="saryy" letterSpacing="widest" fontSize="sm" mb="10">
              ГАРАНТИИ
            </Text>
            <Heading
              color="jashyl"
              fontWeight="500"
              size="xl"
              textAlign="center"
              mb="14"
            >
              С нами безопасно!
            </Heading>
            <CustomGrid />
          </Flex>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box>
        <Container maxW="container.lg2" py={["50px", null, "100px"]}>
          <Flex flexDir="column" alignItems="center">
            <Text color="saryy" letterSpacing="widest" fontSize="sm" mb="10">
              ГАРАНТИИ
            </Text>
            <Heading
              color="jashyl"
              fontWeight="500"
              size="xl"
              textAlign="center"
              mb="14"
            >
              С нами вы инвестируете с свою <br /> финансовую безопасность
            </Heading>
          </Flex>
          <Accordion allowToggle={true}>
            {faqs.map(({ question, answer }, id) => (
              <AccordionItem key={"faq-" + id}>
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
      <Box py={["50px", null, "100px"]}>
        <Container maxW="container.lg2">
          <Callback />
        </Container>
      </Box>
      {/**---------------------- */}
    </Layout>
  );
};

const faqs = [
  {
    question: "Что такое кооператив «Ихсан Групп»?",
    answer:
      "Рынок ипотеки становится все более цивилизованным, а нынешние клиенты — потенциальные заемщики — это уже не те физические лица, которые приходили за кредитом на недвижимость года 2 назад. И данная ситуация меняется на глазах — наши дети уже с младенчества привыкают к терминам «ипотека» и «аннуитет», а также учатся планировать свой бюджет с учетом ежемесячных платежей. Считаю, что финансовая грамотность не может не иметь четких границ в своем развитии.",
  },
  {
    question: "Если у меня нет денег для первоначального взноса?",
    answer:
      "Рынок ипотеки становится все более цивилизованным, а нынешние клиенты — потенциальные заемщики — это уже не те физические лица, которые приходили за кредитом на недвижимость года 2 назад. И данная ситуация меняется на глазах — наши дети уже с младенчества привыкают к терминам «ипотека» и «аннуитет», а также учатся планировать свой бюджет с учетом ежемесячных платежей. Считаю, что финансовая грамотность не может не иметь четких границ в своем развитии.",
  },
  {
    question:
      "У меня есть 25% от стоимости жилья, как скоро я заеду в квартиру?",
    answer: "panel",
  },
  {
    question: "В какой срок приобретается недвижимость для пайщика?",
    answer: "panel",
  },
  {
    question: "Могу ли я получить жилье, если я работаю неофициально?",
    answer: "panel",
  },
  {
    question: "Кто такой пайщик?",
    answer: "panel",
  },
  {
    question:
      "Можете ли Вы выселить пайщика и продать квартиру без его ведома?",
    answer: "panel",
  },
  {
    question:
      "Могу ли я продать невыкупленную квартиру, являясь пайщиком кооператива?",
    answer: "panel",
  },
  {
    question:
      "Могу ли я досрочно закрыть долг перед кооперативом за выкупаемую, в рассрочку, квартиру?",
    answer: "panel",
  },
];

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
        bg: "#F7F8F6",
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

const useGuaranteesApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await queryGuarantees();
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

const CustomGrid = (props) => {
  const { data: guarantees, isError, isLoading } = useGuaranteesApi();

  console.log(guarantees);

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
  <AspectRatio width="100%" ratio={3 / 2}>
    <Skeleton />
  </AspectRatio>
);

export default Guarantees;
