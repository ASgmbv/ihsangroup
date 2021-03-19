import { Text, Flex, AspectRatio, Img, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { format } from "date-fns";

const Post = ({ date, title, image, id }) => {
  return (
    <Flex flexDir="column">
      <NextLink href={`/news/${id}`}>
        <a>
          <AspectRatio ratio={3 / 2} w="full">
            <Img src={image} objectFit="cover" />
          </AspectRatio>
        </a>
      </NextLink>
      <Flex py="5" flex="1" flexDirection="column">
        <Flex alignItems="center" mb="4">
          <Icon as={FaRegCalendar} mr="2" color="#ADB4C2" />
          <Text fontWeight="semibold" color="#ADB4C2">
            {format(new Date(date), "dd.MM.yyyy")}
          </Text>
        </Flex>
        <NextLink href={`/news/${id}`} passHref>
          <Link
            _hover={{ textDecoration: "underline" }}
            fontWeight="500"
            color="black"
            flex="1"
          >
            {title}
          </Link>
        </NextLink>

        <NextLink href={`/news/${id}`} passHref>
          <Link
            fontSize="md"
            _hover={{ textDecoration: "underline" }}
            color="jashyl"
            mt="4"
          >
            Узнать больше
            <Text as="span" mx="2" fontSize="xs">
              &#9654;
            </Text>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Post;
