import Layout from "@/components/Layout";
import {
  Box,
  Container,
  Flex,
  Grid,
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
import { useEffect } from "react";
import { queryReviews, queryVideos } from "@/utils/queries";
import LoadingError from "@/components/LoadingError";
import AnimatingHeading from "@/components/AnimatingHeading";
import { useQuery } from "react-query";

const Review = ({ image, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="keen-slider__slide">
      <Image
        src={image}
        maxH="400px"
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

const ReviewsSlider = ({ reviews = [] }) => {
  const slidesCount = useBreakpointValue({ base: 2, sm: 3, md: 4 });

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: slidesCount,
    spacing: 50,
  });

  useEffect(() => {
    if (slider) {
      slider.resize();
    }
  }, [reviews, slider]);

  return (
    <Flex
      bg="boz"
      p="10"
      width="100%"
      position="relative"
      ref={sliderRef}
      className="keen-slider"
    >
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
  const { data: reviews, isLoading, isError } = useQuery(
    "reviews",
    queryReviews
  );

  const { data: videos } = useQuery("videos", queryVideos);

  return (
    <Layout title="Отзывы">
      <SectionHeader>Отзывы</SectionHeader>

      {/**---------------------- */}
      <Box py={["50px", null, "100px"]}>
        <Container maxW="container.lg2">
          <Flex flexDir="column" alignItems="center">
            <AnimatingHeading
              subtitle="НАШИ ОТЗЫВЫ"
              title={<>Отзывы наших клиентов</>}
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
              my="20"
              templateColumns={[
                "repeat(1, 1fr)",
                null,
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              width="100%"
              gap="10"
            >
              {videos?.map((video, idx) => (
                <ReactPlayer key={"video" + idx} width="100%" url={video.url} />
              ))}
            </Grid>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
};

export default Reviews;
