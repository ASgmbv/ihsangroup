import { useLocale } from "@/utils/useLocale";
import {
   Container,
   Box,
   Flex,
   Heading,
   Text,
   IconButton,
   Icon,
   ButtonGroup,
   Stack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

export const wrap = (min, max, v) => {
   const rangeSize = max - min;
   return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

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
   const [t] = useLocale("home");

   const slides = [
      {
         title: t.slider.heading_1,
         description: t.slider.description_1,
         image: "/slider1.jpg",
      },
      {
         title: "Приобретение жилья сегодня с рассрочкой на 10 лет 0%",
         description:
            "Уникальное предложение на рынке недвижимости Рассрочка на 10 лет без %",
         image: "/slider2.jpg",
      },
   ];

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
         <AnimatePresence>
            <MotionBox
               key={"slide-" + page}
               bg={`url(${slides[slideIndex].image})`}
               backgroundSize="cover"
               backgroundPosition="center"
               position="absolute"
               top="0"
               bottom="0"
               left="0"
               right="0"
               zIndex="-1"
               animate={{
                  scale: 1.1,
                  opacity: 1,
                  transition: {
                     scale: { duration: 8 },
                  },
               }}
               _after={{
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  bg: "rgba(1, 87, 71,0.7)",
               }}
            />
         </AnimatePresence>
         <Box height="full" width="full" position="absolute" top="0" left="0">
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
