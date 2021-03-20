import { queryNews } from "@/queries";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Container, Flex, Grid } from "@chakra-ui/react";
import Post from "@/components/Post";

export async function getStaticProps() {
  const posts = await queryNews();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

const News = ({ posts }) => {
  return (
    <Layout>
      <SectionHeader>Новости</SectionHeader>
      <Container maxW="container.lg2">
        <Flex my={["50px", null, "100px"]}>
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
