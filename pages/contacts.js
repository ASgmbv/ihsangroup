import Layout from "@/components/Layout";
import {
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  Stack,
  Image,
  AspectRatio,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import SectionHeader from "@/components/SectionHeader";
import { queryOffices } from "@/utils/queries";
import LoadingError from "@/components/LoadingError";
import { useQuery } from "react-query";

const SkeletonOffice = () => (
  <Flex width="full">
    <AspectRatio width={["100%", null, null, "30%"]} ratio={3 / 2} mr="8">
      <Skeleton />
    </AspectRatio>
    <SkeletonText
      noOfLines={6}
      spacing="6"
      width="70%"
      display={["none", null, null, "block"]}
    />
  </Flex>
);

const Contacts = () => {
  const { data: offices, isLoading, isError } = useQuery(
    "offices",
    queryOffices
  );

  return (
    <Layout title="Контакты">
      <SectionHeader>Контакты</SectionHeader>
      {/**---------------------- */}
      <Container maxW="container.xl" py={["50px", null, "100px"]}>
        {isError ? (
          <LoadingError />
        ) : (
          <Stack spacing="10">
            {isLoading
              ? [0, 1].map((el) => <SkeletonOffice key={"office-" + el} />)
              : offices.map((el) => (
                  <Card
                    key={el.name}
                    image={el.image}
                    title={el.name}
                    address={el.address}
                    email={el.email}
                    phoneNumbers={el.phones?.split("\n") || []}
                  />
                ))}
          </Stack>
        )}
      </Container>
    </Layout>
  );
};

const Card = ({ image, title, address, email, phoneNumbers }) => {
  return (
    <Flex flexDir={["column", null, "row"]}>
      <AspectRatio w="30%" ratio={1}>
        <Image
          src={image}
          objectFit="cover"
          display={["none", null, null, "block"]}
        />
      </AspectRatio>
      <Flex flex="1" bg="boz" flexDir="column" padding={[4, null, 6]}>
        <Heading
          mb="4"
          fontWeight="semibold"
          fontSize={["lg", null, "25px"]}
          color="jashyl"
        >
          {title}
        </Heading>
        <Grid
          templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]}
          gap={[4, null, 10]}
          color="#585858"
        >
          <Stack>
            <Text color="saryy">Адрес:</Text>
            <Text>{address}</Text>
          </Stack>
          <Stack>
            <Text color="saryy">Телефон:</Text>
            {phoneNumbers.map((pn, idx) => (
              <Text key={pn + idx}>{pn} </Text>
            ))}
          </Stack>
          <Stack>
            <Text color="saryy">Е-мейл:</Text>
            <Text>{email}</Text>
          </Stack>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Contacts;
