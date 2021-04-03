import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Grid,
  Box,
  Image,
  AspectRatio,
  Skeleton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { queryGuarantees } from "@/utils/queries";
import LoadingError from "@/components/LoadingError";

const useGuaranteesApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await queryGuarantees();
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

const GuarantessCard = () => {
  return (
    <Box pb="100px">
      <Container maxW="container.lg2">
        <Flex flexDir="column" alignItems="center">
          <Text color="saryy" letterSpacing="widest" fontSize="sm" mb="10">
            ГАРАНТИИ
          </Text>
          <Heading
            color="jashyl"
            fontWeight="500"
            size="xl"
            textAlign="center"
            mb="14"
          >
            С нами безопасно!
          </Heading>
          <CustomGrid mb="30px" />
          <NextLink href="/guarantees" passHref>
            <CustomButtonGreen as="a">
              Открыть весь список &#62;
            </CustomButtonGreen>
          </NextLink>
        </Flex>
      </Container>
    </Box>
  );
};

const CustomButtonGreen = ({ children, ...props }) => {
  return (
    <Button
      size="lg"
      w="fit-content"
      lineHeight="1.2"
      borderRadius="0"
      fontSize="14px"
      fontWeight="semibold"
      bg="transparent"
      color="jashyl"
      border="1px"
      borderColor="jashyl"
      _hover={{
        bg: "jashyl",
        color: "white",
      }}
      _active={{
        borderColor: "currentColor",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

const CustomGrid = (props) => {
  const { data: guarantees, isLoading, isError } = useGuaranteesApi();

  if (isError) {
    return <LoadingError mb="50px" />;
  }

  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", null, null, "repeat(3, 1fr)"]}
      gap={[6, null, 10]}
      width="100%"
      {...props}
    >
      {isLoading
        ? [0, 1, 3].map((el) => <SkeletonGuarantee key={"guarantee-" + el} />)
        : guarantees
            .slice(0, 5)
            .map((guarantee) => (
              <Card
                key={guarantee.title}
                icon={guarantee.icon}
                title={guarantee.title}
                content={guarantee.description}
              />
            ))}
    </Grid>
  );
};

const SkeletonGuarantee = () => (
  <AspectRatio width="100%" ratio={7 / 4}>
    <Skeleton />
  </AspectRatio>
);

const Card = ({ icon, title, content, ...props }) => {
  return (
    <Flex
      border="1px solid"
      borderColor="gray.200"
      p={[3, null, 5]}
      _hover={{
        bg: "#F7F8F6",
        transform: "scale(1.05)",
      }}
      transition="transform 0.1s"
      {...props}
    >
      <Image src={icon} boxSize={["30px", null, "40px"]} objectFit="cover" />
      <Flex flexDir="column" ml="6">
        <Heading as="h3" size="md" color="jashyl" mb="3" fontWeight="semibold">
          {title}
        </Heading>
        <Text lineHeight="tall" color="gray.600">
          {content}
        </Text>
      </Flex>
    </Flex>
  );
};

export default GuarantessCard;
