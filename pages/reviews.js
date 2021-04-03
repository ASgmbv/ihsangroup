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
  Spinner,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import SectionHeader from "../components/SectionHeader";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { queryReviews } from "@/utils/queries";
import LoadingError from "@/components/LoadingError";
import AnimatingHeading from "@/components/AnimatingHeading";

const useReviewsApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await queryReviews();
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

const Review = ({ image, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="keen-slider__slide">
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

const ReviewsSlider = ({ reviews = [] }) => {
  const slidesCount = useBreakpointValue({ base: 2, sm: 3, md: 4 });

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: slidesCount,
    spacing: 20,
  });

  useEffect(() => {
    if (slider) {
      slider.resize();
    }
  }, [reviews, slider]);

  return (
    <Flex bg="boz" p="10" width="100%" ref={sliderRef} className="keen-slider">
      {reviews.map(({ image, description }, index) => (
        <Review image={image} title={description} key={"review-" + index} />
      ))}

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
  const { data: reviews, isLoading, isError } = useReviewsApi();

  return (
    <Layout title="Отзывы">
      <SectionHeader>Отзывы</SectionHeader>

      {/**---------------------- */}
      <Box py={["50px", null, "100px"]}>
        <Container maxW="container.lg2">
          <Flex flexDir="column" alignItems="center">
            <AnimatingHeading
              subtitle="НАШИ ПРОГРАММЫ"
              title={
                <>
                  Мы подберем программу, <br /> которая подойдет именно для вас
                </>
              }
            />
            {isError ? (
              <LoadingError />
            ) : isLoading ? (
              <Flex alignItems="center" justifyContent="center" height="200px">
                <Spinner color="saryy" />
              </Flex>
            ) : (
              <ReviewsSlider reviews={reviews} />
            )}
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
