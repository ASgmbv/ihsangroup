import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
  Stack,
  Icon,
  Link as CLink,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { MdCheck } from "react-icons/md";
import LinkIcon from "../assets/icons/LinkIcon";

const Quality = ({ title, ...props }) => {
  return (
    <Flex
      align="center"
      _hover={{
        color: "saryy",
        div: {
          bg: "saryy",
        },
        svg: {
          fill: "white",
        },
      }}
      fontWeight="semibold"
      color="#444D49"
      {...props}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        boxSize="7"
        mr="3"
        bg="#EFF1ED"
      >
        <Icon as={MdCheck} boxSize="5" color="saryy" />
      </Flex>
      <Text>{title}</Text>
    </Flex>
  );
};

const Mission = () => {
  return (
    <Box bg="#F6F8F6" py={["50px", null, "100px"]}>
      <Container maxW="container.lg2">
        <Grid templateColumns={["1fr", null, null, "40% auto"]} gap="50px">
          <Box display={["none", null, null, "block"]} position="relative">
            <NextImage
              src="/main-mission.png"
              layout="fill"
              alt="Ихсан Групп"
              objectFit="cover"
            />
          </Box>
          <Stack direction="column" spacing="6">
            <Text color="saryy" letterSpacing="widest" fontSize="sm">
              МИССИЯ КООПЕРАТИВА
            </Text>
            <Heading color="jashyl" fontWeight="500" size="xl">
              Ихсан Групп — доступное <br /> жилье для каждого!
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap="20px">
              <Quality title="Выгодные условия" />
              <Quality title="Полный спектр услуг" />
              <Quality title="Гарантированная безопасность" />
              <Quality title="Уникальные возможности" />
            </Grid>
            <Text lineHeight="taller">
              Кооператив осуществляет свою деятельность в соответствии
              Гражданским кодексом Кыргызской Республики, Законом Кыргызской
              Республики «О кооперативах» 11 июня 2004 года №70, другими
              нормативными правовыми актами Кыргызской Республики и настоящим
              уставом.
            </Text>
            <CLink
              isExternal
              color="jashyl"
              textDecoration="underline"
              fontWeight="semibold"
              href="http://cbd.minjust.gov.kg/act/view/ru-ru/1456"
              _hover={{
                textDecoration: "underline",
              }}
            >
              <LinkIcon />
              Закон О Кооператива в КР от 11 июня 2004 года №70
            </CLink>
            <CLink
              isExternal
              color="jashyl"
              textDecoration="underline"
              fontWeight="semibold"
              href="http://cbd.minjust.gov.kg/act/view/ru-ru/1190"
              _hover={{
                textDecoration: "underline",
              }}
            >
              <LinkIcon />
              Закон Об Инвестициях в КР от 27 марта 2003 года № 66
            </CLink>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mission;
