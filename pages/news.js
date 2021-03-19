import { queryNews } from "@/queries";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  Box,
  Img,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import { format } from "date-fns";
import NextLink from "next/link";

export async function getStaticProps() {
  const posts = await queryNews();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

const Post = ({ date, title, image, id }) => {
  return (
    <Box
      border="1px solid"
      borderColor="jashyl"
      _hover={{
        boxShadow: "lg",
      }}
    >
      <NextLink href={`/news/${id}`}>
        <a>
          <AspectRatio ratio={3 / 2} w="full">
            <Img src={image} objectFit="cover" />
          </AspectRatio>
        </a>
      </NextLink>
      <Box p="5">
        <Text mb="2" fontWeight="semibold" color="saryy">
          {format(new Date(date), "dd.MM.yyyy")}
        </Text>
        <NextLink href={`/news/${id}`} passHref>
          <Link
            fontSize="lg"
            _hover={{ textDecoration: "underline" }}
            fontWeight="bold"
            color="blackAlpha.800"
          >
            {title}
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

const News = ({ posts }) => {
  return (
    <Layout>
      <SectionHeader>Новости</SectionHeader>
      <Container maxW="container.lg2">
        <Flex my={["50px", null, "100px"]}>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              null,
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={6}
          >
            {posts.map(({ id, date, title, image }) => (
              <Post key={id} id={id} date={date} title={title} image={image} />
            ))}
          </Grid>
        </Flex>
      </Container>
    </Layout>
  );
};

export default News;
