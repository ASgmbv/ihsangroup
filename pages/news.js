import { queryNews } from "@/queries";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Alert,
  AlertIcon,
  AspectRatio,
  Container,
  Flex,
  Grid,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import Post from "@/components/Post";
import { useEffect, useState } from "react";

const SkeletonPost = () => (
  <Flex flexDir="column">
    <AspectRatio ratio={3 / 2} w="full">
      <Skeleton width="100%" height="100%" />
    </AspectRatio>
    <SkeletonText mt="6" noOfLines={4} spacing="6" />
  </Flex>
);

const useDataApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await queryNews();
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

const News = () => {
  const { data: posts, isLoading, isError } = useDataApi();

  return (
    <Layout>
      <SectionHeader>Новости</SectionHeader>
      <Container maxW="container.lg2">
        <Flex my={["50px", null, "100px"]}>
          {isError ? (
            <Alert status="warning" mx="auto" maxW="400px">
              <AlertIcon />
              Ошибка при загрузке
            </Alert>
          ) : (
            <Grid
              w="full"
              templateColumns={[
                "repeat(1, 1fr)",
                null,
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={6}
            >
              {isLoading ? (
                <>
                  <SkeletonPost />
                  <SkeletonPost />
                  <SkeletonPost />
                </>
              ) : (
                posts.map(({ id, date, title, image }) => (
                  <Post
                    key={id}
                    id={id}
                    date={date}
                    title={title}
                    image={image}
                  />
                ))
              )}
            </Grid>
          )}
        </Flex>
      </Container>
    </Layout>
  );
};

export default News;
