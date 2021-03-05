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
} from "@chakra-ui/react";
import ReactPlayer from "react-player";

const Reviews = () => {
  return (
    <Layout>
      <Flex
        w="full"
        backgroundImage="url('/14.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        h={["300px"]}
      >
        <Box h="full" w="full" background="rgba(1, 87, 71,0.8)">
          <Container maxW="container.xl" h="full">
            <Flex flexDir="column" justify="center" align="center" h="full">
              <Heading
                color="white"
                size="2xl"
                fontWeight="500"
                lineHeight="1.3"
                mb="6"
              >
                Отзывы
              </Heading>
            </Flex>
          </Container>
        </Box>
      </Flex>
      {/**---------------------- */}
      <Box py="100px">
        <Container maxW="container.xl">
          <Flex flexDir="column" alignItems="center">
            <Text color="saryy" letterSpacing="widest" fontSize="sm" mb="10">
              НАШИ ПРОГРАММЫ
            </Text>
            <Heading
              color="jashyl"
              fontWeight="500"
              size="xl"
              textAlign="center"
              mb="100px"
            >
              Мы подберем программу, <br /> которая подойдет именно для вас
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" w="full" gap="20">
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
              <ReactPlayer
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
            </Grid>
          </Flex>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box pb="100px">
        <Container maxW="container.xl">
          <Callback />
        </Container>
      </Box>
    </Layout>
  );
};

export default Reviews;
