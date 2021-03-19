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
} from "@chakra-ui/react";
import { format } from "date-fns";
import { Elements, RichText } from "prismic-reactjs";
import NextLink from "next/link";

export async function getStaticPaths() {
  const posts = await queryNews();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await queryNewsById(params.id);
  const posts = await queryNews();

  return {
    props: {
      post,
      posts,
    },
    revalidate: 1,
  };
}

const News = ({ post, posts }) => {
  if (!post) return null;
  const { date, title, image, text } = post;

  return (
    <Layout>
      <SectionHeader>Новости</SectionHeader>
      <Container maxW="container.lg2">
        <Grid
          my={["50px", null, "80px"]}
          templateColumns={["auto", null, null, "auto 400px"]}
          gap="50px"
        >
          <Stack direction="column" spacing={[4, null, 6]}>
            <Text color="saryy" fontSize="sm">
              {format(new Date(date), "dd-MM-yyyy")}
            </Text>
            <Heading color="jashyl" fontWeight="500" size="lg">
              {title}
            </Heading>
            <AspectRatio ratio={3 / 2} width={["100%", null, "100%"]}>
              <Img src={image} objectFit="cover" />
            </AspectRatio>
            <RichText render={text} htmlSerializer={htmlSerializer} />
          </Stack>
          <Box>
            <Heading
              fontSize={["md", null, "2xl"]}
              mb="6"
              color="blackAlpha.800"
            >
              Последние новости
            </Heading>
            <Stack
              divider={<StackDivider borderColor="gray.200" />}
              spacing="4"
            >
              {posts.map(({ id, title, date, image }) => (
                <Post
                  date={date}
                  title={title}
                  image={image}
                  id={id}
                  key={id}
                />
              ))}
            </Stack>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

const Post = ({ id, date, title, image }) => {
  return (
    <Stack direction="row" spacing="4">
      <NextLink href={`/news/${id}`}>
        <a>
          <Img src={image} boxSize="90px" />
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

const htmlSerializer = function (type, element, content, children) {
  switch (type) {
    case Elements.heading1:
      return (
        <Heading as="h1" size="2xl">
          {children.join("")}
        </Heading>
      );
    case Elements.heading2:
      return (
        <Heading as="h2" size="xl">
          {children.join("")}
        </Heading>
      );
    case Elements.heading3:
      return (
        <Heading as="h3" size="lg">
          {children.join("")}
        </Heading>
      );
    case Elements.heading4:
      return (
        <Heading as="h4" size="md">
          {children.join("")}
        </Heading>
      );
    case Elements.heading5:
      return (
        <Heading as="h5" size="sm">
          {children.join("")}
        </Heading>
      );
    case Elements.heading6:
      return (
        <Heading as="h6" size="xs">
          {children.join("")}
        </Heading>
      );
    case Elements.paragraph:
      return <Text lineHeight="taller">{children.join("")}</Text>;
    case Elements.preformatted:
      return `<pre>${children.join("")}</pre>`;
    case Elements.strong:
      return `<strong>${children.join("")}</strong>`;
    case Elements.em:
      return `<em>${children.join("")}</em>`;
    case Elements.listItem:
      return `<li>${children.join("")}</li>`;
    case Elements.oListItem:
      return `<li>${children.join("")}</li>`;
    case Elements.list:
      return `<ul>${children.join("")}</ul>`;
    case Elements.oList:
      return `<ol>${children.join("")}</ol>`;
    case Elements.embed:
      return `
        <div data-oembed="${element.oembed.embed_url}"
          data-oembed-type="${element.oembed.type}"
          data-oembed-provider="${element.oembed.provider_name}"
        >
          ${element.oembed.html}
        </div>
      `;
    case Elements.label:
      var label = element.data.label ? ` class="${element.data.label}"` : "";
      return `<span ${label}>${children.join("")}</span>`;
    case Elements.span:
      return content ? content.replace(/\n/g, "<br />") : "";
    default:
      return null;
  }
};

export default News;