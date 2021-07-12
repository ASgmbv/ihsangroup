import AnimatingHeading from "@/components/AnimatingHeading";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
   AspectRatio,
   Box,
   Container,
   Flex,
   Grid,
   Heading,
   Image,
   Skeleton,
   SkeletonText,
   Stack,
   Text,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { queryPartners, queryBonusCardDescription } from "../utils/queries";

const BonusPage = () => {
   return (
      <Layout title="Бонусная карта">
         <SectionHeader>Бонусная Карта Ихсан</SectionHeader>
         <Flex py={["50px", null, null, "100px"]}>
            <Container maxW="container.lg2">
               <Description />
               <Partners />
            </Container>
         </Flex>
      </Layout>
   );
};

const Partners = () => {
   const { data: partners, isLoading } = useQuery("partners", queryPartners);

   return (
      <Box as="section">
         <Heading
            color="jashyl"
            fontWeight="500"
            size="xl"
            textAlign="center"
            mb="14"
         >
            Партнеры
         </Heading>
         <Grid
            templateColumns={["repeat(1, 1fr)", null, null, "repeat(3, 1fr)"]}
            bg="#EFF1ED"
            columnGap={28}
            rowGap={20}
            p={20}
         >
            {isLoading
               ? [0, 1, 2].map((el) => (
                    <Stack key={el} spacing={4}>
                       <AspectRatio ratio={3 / 2}>
                          <Skeleton width="100%" height="100%" />
                       </AspectRatio>
                       <Skeleton height="15px" />
                    </Stack>
                 ))
               : partners?.map(({ image, name }, idx) => (
                    <Flex key={idx} flexDirection="column">
                       <Image
                          alt={name}
                          src={image}
                          objectFit="contain"
                          mb={5}
                          flex={1}
                       />

                       <Box
                          textAlign="center"
                          fontWeight="bold"
                          fontSize="17px"
                          color="#444D4A"
                       >
                          {name}
                       </Box>
                    </Flex>
                 ))}
         </Grid>
      </Box>
   );
};

const Description = () => {
   const { data: bonusCardDescription, isLoading } = useQuery(
      "queryBonusCardDescription",
      queryBonusCardDescription
   );

   return (
      <Box as="section" mb={[10, null, 20]}>
         <Heading
            color="jashyl"
            fontWeight="500"
            size="xl"
            textAlign="center"
            mb="14"
         >
            Преимущества <br /> &ldquo;Бонусной Карты Ихсан&ldquo;
         </Heading>
         <Flex justifyContent="space-between">
            <Grid
               templateColumns={["1fr", null, "3fr 2fr"]}
               gap={[10, null, 40]}
               width="100%"
               alignItems="center"
            >
               {isLoading ? (
                  <>
                     <Box alignSelf="flex-start">
                        <SkeletonText noOfLines={6} spacing={6} />
                     </Box>

                     <AspectRatio ratio={3 / 2}>
                        <Skeleton width="100%" height="100%" />
                     </AspectRatio>
                  </>
               ) : (
                  <>
                     <Text lineHeight="taller" fontSize="md">
                        {bonusCardDescription?.description}
                     </Text>
                     <Image src="/bonus_card.png" />
                  </>
               )}
            </Grid>
         </Flex>
      </Box>
   );
};

export default BonusPage;
