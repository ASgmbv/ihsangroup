import { queryNews, queryNewsById } from "@/queries";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Container,
  Text,
  Flex,
  Heading,
  Stack,
  Img,
  AspectRatio,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { Elements, RichText } from "prismic-reactjs";

export async function getStaticPaths() {
  const posts = await queryNews();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  console.log({ paths }, { depth: null });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await queryNewsById(params.id);

  console.log({ post }, { depth: null });

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}

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

const News = ({ post: { date, title, image, text } }) => {
  return (
    <Layout>
      <SectionHeader>Новости</SectionHeader>
      <Container maxW="container.lg2">
        <Flex my={["50px", null, "100px"]}>
          <Stack direction="column" spacing={[4, null, 6]}>
            <Text color="saryy" letterSpacing="widest" fontSize="sm">
              {format(new Date(date), "dd-MM-yyyy")}
            </Text>
            <Heading color="jashyl" fontWeight="500" size="lg">
              {title}
            </Heading>
            <AspectRatio ratio={3 / 2} width={["100%", null, "50%"]}>
              <Img src={image} objectFit="cover" />
            </AspectRatio>
            <RichText render={text} htmlSerializer={htmlSerializer} />
          </Stack>
        </Flex>
      </Container>
    </Layout>
  );
};

export default News;
