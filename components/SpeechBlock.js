import {
  AspectRatio,
  Grid,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import LoadingError from "./LoadingError";

const SpeechBlock = ({
  isError,
  isLoading,
  photo,
  title,
  description,
  name,
  subtitle,
}) => {
  if (isError) {
    return <LoadingError />;
  }

  return (
    <Grid
      templateColumns={["1fr", null, null, "1fr 1fr"]}
      gap={[0, null, null, 20]}
    >
      <AspectRatio ratio={3 / 2} mb="10">
        {isLoading ? (
          <Skeleton width="100%" />
        ) : (
          <Image src={photo} alt="Ихсан Групп" objectFit="cover" width="100%" />
        )}
      </AspectRatio>
      <Stack direction="column" spacing="6">
        <Text color="saryy" letterSpacing="widest" fontSize="sm">
          {subtitle}
        </Text>
        <Heading color="jashyl" fontWeight="500" size="xl">
          {isLoading ? (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          ) : (
            title
          )}
        </Heading>
        {isLoading ? (
          <SkeletonText noOfLines={11} spacing="4" />
        ) : (
          <>
            <Text lineHeight="tall">{description}</Text>
            <Text
              textAlign="end"
              fontWeight="semibold"
              fontSize="lg"
              color="#DAAC3D"
            >
              {name}
            </Text>
          </>
        )}
      </Stack>
    </Grid>
  );
};

export default SpeechBlock;
