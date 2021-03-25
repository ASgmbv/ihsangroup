import Callback from "@/components/Callback";
import Layout from "@/components/Layout";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import SectionHeader from "../components/SectionHeader";

const Review = ({ image, title }) => {
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
        size="sm"
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

const Reviews = () => {
  return (
    <Layout>
      <SectionHeader>Отзывы</SectionHeader>

      {/**---------------------- */}
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
              mb="50px"
            >
              Мы подберем программу, <br /> которая подойдет именно для вас
            </Heading>
            <Grid
              templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
              w="full"
              gap="10"
              bg="boz"
              p="10"
            >
              {/* <Stack spacing="10">
                <Heading fontWeight="500" color="jashyl">
                  Уютный дом по программе «Популярный» 25 + 5
                </Heading>
                <Text lineHeight="taller"></Text>
                <Text color="saryy" fontWeight="xl">
                  Программа: 25 + 5
                </Text>
              </Stack> */}
              {/* <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
              /> */}
              {/* <Image src="/review1.jpeg" objectFit="contain" width="200px" />
              <Image src="/review1.jpeg" objectFit="contain" width="200px" />
              <Image src="/review1.jpeg" objectFit="contain" width="200px" />
              <Image src="/review1.jpeg" objectFit="contain" width="200px" /> */}
              <Review image="/review1.jpeg" title="Гуля эже" />
              <Review image="/review2.jpeg" title="Гуля эже" />
              <Review image="/review1.jpeg" title="Гуля эже" />
              <Review image="/review2.jpeg" title="Гуля эже" />

              {/* <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
              />
              <Stack spacing="10">
                <Heading fontWeight="500" color="jashyl">
                  Уютный дом по программе «Популярный» 25 + 5
                </Heading>
                <Text lineHeight="taller">
                  Excepteur sint occaecat cupidatat non proident sunt iculpa qui
                  officia deserunt mollit anim est. laborum sed perspiciatis
                  unde omnis natus error sit voluptatem accusantium dolore mque
                  laudantium totam rem aperiam.
                </Text>
                <Text color="saryy" fontWeight="xl">
                  Программа: 25 + 5
                </Text>
              </Stack>
              <Stack spacing="10">
                <Heading fontWeight="500" color="jashyl">
                  Уютный дом по программе «Популярный» 25 + 5
                </Heading>
                <Text lineHeight="taller">
                  Excepteur sint occaecat cupidatat non proident sunt iculpa qui
                  officia deserunt mollit anim est. laborum sed perspiciatis
                  unde omnis natus error sit voluptatem accusantium dolore mque
                  laudantium totam rem aperiam.
                </Text>
                <Text color="saryy" fontWeight="xl">
                  Программа: 25 + 5
                </Text>
              </Stack>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
              /> 
              
              */}
            </Grid>
            <Grid
              mt="10"
              templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
              w="full"
              gap="10"
              bg="boz"
              p="10"
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=IOhrlY525Z4&ab_channel=IHSANGroupLtd%D0%9D%D0%96%D0%9A"
                width="100%"
              />
              <ReactPlayer
                url="https://www.youtube.com/watch?v=En2H5sHEn0o&ab_channel=IHSANGroupLtd%D0%9D%D0%96%D0%9A"
                width="100%"
              />
            </Grid>
          </Flex>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box pb="100px">
        <Container maxW="container.lg2">
          <Callback />
        </Container>
      </Box>
    </Layout>
  );
};

export default Reviews;
