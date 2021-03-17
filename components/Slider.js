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
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
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
    title: "Возможность купить жильё по самым выгодным ценам",
    description:
      "Уникальное предложение на рынке недвижимости Рассрочка на 10 лет без %",
    image: "/back2.jpg",
  },
];

const Slider = () => {
  const [page, setPage] = useState(0);

  const slideIndex = wrap(0, slides.length, page);

  return (
    <Flex weight="full" height="calc(100vh - 100px)" position="relative">
      <AnimatePresence>
        <MotionImage
          objectFit="cover"
          width="100%"
          key={slides[slideIndex].image}
          src={slides[slideIndex].image}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: { duration: 0.5 },
          }}
        />
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
              flexDir="column"
              key={"tttt" + page}
              initial={{
                y: -50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                opacity: { duration: 0.5 },
              }}
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
              <IconButton
                borderRadius="0"
                variant="outline"
                color="saryy"
                onClick={() => {
                  setPage(page - 1);
                }}
                _hover={{
                  color: "white",
                  bg: "saryy",
                }}
                borderColor="saryy"
                icon={<Icon as={GoTriangleLeft} color="inherit" />}
              />
              <IconButton
                borderRadius="0"
                variant="outline"
                onClick={() => {
                  setPage(page + 1);
                }}
                _hover={{
                  color: "white",
                  bg: "saryy",
                }}
                color="saryy"
                borderColor="saryy"
                icon={<Icon as={GoTriangleRight} color="inherit" />}
              />
            </ButtonGroup>
          </Container>
        </Box>
      </AnimatePresence>
    </Flex>
  );
};

export default Slider;
