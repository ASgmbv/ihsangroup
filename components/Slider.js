import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  IconButton,
  Icon,
  ButtonGroup,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

const MotionImage = motion(Image);
const MotionFlex = motion(Flex);

export const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const slides = [
  {
    title: "Возможность купить жильё по самым выгодным ценам",
    description:
      "Уникальное предложение на рынке недвижимости Рассрочка на 10 лет без %",
    image: "/back.jpg",
  },
  {
    title: "Приобретение жилья сегодня с рассрочкой на 10 лет 0%",
    description:
      "Уникальное предложение на рынке недвижимости Рассрочка на 10 лет без %",
    image: "/back2.jpg",
  },
];

const SliderButton = ({ icon, onClick }) => {
  return (
    <IconButton
      borderRadius="0"
      variant="outline"
      color="saryy"
      onClick={onClick}
      _hover={{
        color: "white",
        bg: "saryy",
      }}
      borderColor="saryy"
      icon={<Icon as={icon} color="inherit" />}
    />
  );
};

const Slider = () => {
  const [page, setPage] = useState(0);

  const slideIndex = wrap(0, slides.length, page);

  const swipeRight = () => {
    setPage(page - 1);
  };

  const swipeLeft = () => {
    setPage(page + 1);
  };

  return (
    <Flex
      weight="full"
      height="calc(100vh - 100px)"
      position="relative"
      overflow="hidden"
    >
      <MotionFlex
        // objectFit="cover"
        width="100%"
        position="relative"
        key={slides[slideIndex].image}
        // src={slides[slideIndex].image}
        initial={{
          opacity: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1.1,
        }}
        transition={{
          opacity: { duration: 0.7 },
          scale: { duration: 10 },
        }}
      >
        <Image objectFit="cover" src={slides[slideIndex].image} w="full" />
      </MotionFlex>
      <Box
        height="full"
        width="full"
        background="rgba(1, 87, 71,0.7)"
        position="absolute"
        top="0"
        left="0"
      >
        <Container
          maxW="container.lg2"
          height="full"
          justifyContent="center"
          position="relative"
          d="flex"
          flexDir="column"
        >
          <MotionFlex
            key={"motion-heading-" + page}
            flexDir="column"
            initial={{
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            maxW="720px"
          >
            <Heading
              color="white"
              size="2xl"
              fontWeight="500"
              lineHeight="1.3"
              mb="6"
            >
              {slides[slideIndex].title}
            </Heading>
            <Text color="white" fontSize="lg" lineHeight="2" mb="6">
              {slides[slideIndex].description}
            </Text>
          </MotionFlex>

          <ButtonGroup position="absolute" bottom="2rem" spacing="3">
            <SliderButton icon={GoTriangleLeft} onClick={swipeLeft} />
            <SliderButton icon={GoTriangleRight} onClick={swipeRight} />
          </ButtonGroup>
          <Stack
            direction="row"
            position="absolute"
            bottom="1rem"
            left={`calc(50% - ${slides.length - 0.5}rem)`}
          >
            {slides.map((el, idx) => (
              <Box
                key={"bb-" + idx}
                boxSize="2"
                borderRadius="50%"
                bg={slideIndex === idx ? "green.400" : "whiteAlpha.800"}
              ></Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </Flex>
  );
};

export default Slider;
