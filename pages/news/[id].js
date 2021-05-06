import { queryNews, queryNewsById } from "@/queries";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Container,
  Text,
  Heading,
  Stack,
  Img,
  AspectRatio,
  Grid,
  Box,
  Link as ChakraLink,
  StackDivider,
  Spinner,
  Skeleton,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { RichText } from "prismic-reactjs";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const News = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: post = {},
    isLoading: postFetching,
    isError: postError,
  } = useQuery(["newsPost", router.asPath], () => queryNewsById(id));

  const {
    data: newsPosts,
    isLoading: newsFetching,
    isError: newsError,
  } = useQuery("newsPosts", queryNews);

  const { date, title, image, text } = post;

  return (
    <Layout title={title || "Новости"}>
      <SectionHeader>Новости</SectionHeader>
      <Container maxW="container.lg2">
        <Grid
          my={["50px", null, "80px"]}
          templateColumns={["auto", null, null, "auto 400px"]}
          gap="50px"
        >
          {postError ? (
            <Alert status="error">
              <AlertIcon />
              Ошибка при загрузке
            </Alert>
          ) : postFetching ? (
            <Spinner mx="auto" my="100px" color="jashyl" />
          ) : (
            <Stack direction="column" spacing={[4, null, 6]}>
              <Text color="saryy" fontSize="sm">
                {date ? format(new Date(date), "dd-MM-yyyy") : ""}
              </Text>
              <Heading color="jashyl" fontWeight="500" size="lg">
                {title}
              </Heading>
              <AspectRatio ratio={3 / 2} width={["100%", null, "100%"]}>
                <Img src={image} objectFit="contain" />
              </AspectRatio>
              <RichText
                render={text}
                // htmlSerializer={htmlSerializer}
              />
            </Stack>
          )}
          <Box>
            <Heading
              fontSize={["md", null, "2xl"]}
              mb="6"
              color="blackAlpha.800"
            >
              Последние новости
            </Heading>
            {newsError ? (
              <Alert status="error">
                <AlertIcon />
                Ошибка при загрузке
              </Alert>
            ) : (
              <Stack
                divider={<StackDivider borderColor="gray.200" />}
                spacing="4"
              >
                {newsFetching
                  ? [0, 1, 2].map((el) => <SkeletonPost key={el} />)
                  : newsPosts.map(({ id, title, date, image }) => (
                      <Post
                        date={date}
                        title={title}
                        image={image}
                        id={id}
                        key={id}
                      />
                    ))}
              </Stack>
            )}
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

const SkeletonPost = () => (
  <Stack direction="row" spacing="4" w="full">
    <Skeleton boxSize="90px" />
    <Stack flex="1" spacing="3">
      <Skeleton height="10px" w="60px" />
      <Skeleton height="10px" w="full" />
      <Skeleton height="10px" w="full" />
    </Stack>
  </Stack>
);

const Post = ({ id, date, title, image }) => {
  return (
    <Stack direction="row" spacing="4">
      <NextLink href={`/news/${id}`}>
        <a>
          <Img src={image} objectFit="cover" boxSize="90px" />
        </a>
      </NextLink>
      <Stack spacing="1" flex="1">
        <Text color="saryy" fontSize="xs">
          {format(new Date(date), "dd.MM.yyyy")}
        </Text>
        <NextLink href={`/news/${id}`} passHref>
          <ChakraLink
            color="#81ADA5"
            lineHeight="short"
            _hover={{ textDecoration: "underline" }}
          >
            {title}
          </ChakraLink>
        </NextLink>
      </Stack>
    </Stack>
  );
};

export default News;
