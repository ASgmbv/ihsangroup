import Callback from "@/components/Callback";
import Layout from "@/components/Layout";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useBreakpointValue,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import SectionHeader from "../components/SectionHeader";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Review = ({ image, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="relative" className="keen-slider__slide">
      <Image src={image} objectFit="cover" onClick={onOpen} alt={title} />
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

const ReviewsSlider = () => {
  const slidesCount = useBreakpointValue({ base: 2, sm: 3, md: 4 });

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: slidesCount,
    spacing: 20,
  });

  return (
    <Flex bg="boz" p="10" width="100%" ref={sliderRef} className="keen-slider">
      <Review image="/review1.jpeg" title="Гуля эже" />
      <Review image="/review2.jpeg" title="Гуля эже" />
      <Review image="/review1.jpeg" title="Гуля эже" />
      <Review image="/review2.jpeg" title="Гуля эже" />
      <Review image="/review2.jpeg" title="Гуля эже" />
      <Review image="/review1.jpeg" title="Гуля эже" />
      <Review image="/review2.jpeg" title="Гуля эже" />
      <IconButton
        position="absolute"
        top="calc(50% - 20px)"
        left="20px"
        _hover={{
          transform: "scale(1.1)",
        }}
        icon={<Icon as={FaAngleLeft} boxSize="20px" />}
        onClick={() => {
          slider.prev(1);
        }}
      />
      <IconButton
        position="absolute"
        top="calc(50% - 20px)"
        right="20px"
        _hover={{
          transform: "scale(1.1)",
        }}
        icon={<Icon as={FaAngleRight} boxSize="20px" />}
        onClick={() => {
          slider.next(1);
        }}
      />
    </Flex>
  );
};

const Reviews = () => {
  return (
    <Layout title="Отзывы">
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
            <ReviewsSlider />
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
