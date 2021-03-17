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

import { MdCheck } from "react-icons/md";

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

const Mission = (params) => {
  return (
    <Box bg="#F6F8F6" py={["50px", null, "100px"]}>
      <Container maxW="container.lg2">
        <Grid templateColumns={["1fr", null, null, "40% auto"]} gap="50px">
          <Image
            src="/1.png"
            alt="Ихсан Групп"
            objectFit="cover"
            display={["none", null, null, "block"]}
          />
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
              <Icon>
                <g id="link" transform="translate(0 -0.019)">
                  <g
                    id="Group_406"
                    data-name="Group 406"
                    transform="translate(7.017 7.035)"
                  >
                    <g id="Group_405" data-name="Group 405">
                      <path
                        id="Path_4696"
                        data-name="Path 4696"
                        d="M201.908,193.681l-1.554-1.554a.79.79,0,0,0-1.117,1.117l1.554,1.554a4.238,4.238,0,0,1-5.994,5.994l-1.554-1.554a.79.79,0,1,0-1.117,1.117l1.557,1.558a5.818,5.818,0,0,0,8.225-8.232Z"
                        transform="translate(-191.895 -191.895)"
                        fill="#006754"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_408"
                    data-name="Group 408"
                    transform="translate(0 0.019)"
                  >
                    <g id="Group_407" data-name="Group 407">
                      <path
                        id="Path_4697"
                        data-name="Path 4697"
                        d="M11.473,3.263,9.916,1.706A5.818,5.818,0,0,0,1.691,9.938l1.554,1.554a.79.79,0,0,0,1.117-1.117L2.809,8.82A4.238,4.238,0,0,1,8.8,2.827l1.554,1.554a.79.79,0,1,0,1.117-1.117Z"
                        transform="translate(0 -0.019)"
                        fill="#006754"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_410"
                    data-name="Group 410"
                    transform="translate(6.569 6.588)"
                  >
                    <g id="Group_409" data-name="Group 409">
                      <path
                        id="Path_4698"
                        data-name="Path 4698"
                        d="M185,183.9l-4-4a.79.79,0,1,0-1.117,1.117l4,4A.79.79,0,0,0,185,183.9Z"
                        transform="translate(-179.652 -179.66)"
                        fill="#006754"
                      />
                    </g>
                  </g>
                </g>
              </Icon>
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
              <Icon>
                <g id="link" transform="translate(0 -0.019)">
                  <g
                    id="Group_406"
                    data-name="Group 406"
                    transform="translate(7.017 7.035)"
                  >
                    <g id="Group_405" data-name="Group 405">
                      <path
                        id="Path_4696"
                        data-name="Path 4696"
                        d="M201.908,193.681l-1.554-1.554a.79.79,0,0,0-1.117,1.117l1.554,1.554a4.238,4.238,0,0,1-5.994,5.994l-1.554-1.554a.79.79,0,1,0-1.117,1.117l1.557,1.558a5.818,5.818,0,0,0,8.225-8.232Z"
                        transform="translate(-191.895 -191.895)"
                        fill="#006754"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_408"
                    data-name="Group 408"
                    transform="translate(0 0.019)"
                  >
                    <g id="Group_407" data-name="Group 407">
                      <path
                        id="Path_4697"
                        data-name="Path 4697"
                        d="M11.473,3.263,9.916,1.706A5.818,5.818,0,0,0,1.691,9.938l1.554,1.554a.79.79,0,0,0,1.117-1.117L2.809,8.82A4.238,4.238,0,0,1,8.8,2.827l1.554,1.554a.79.79,0,1,0,1.117-1.117Z"
                        transform="translate(0 -0.019)"
                        fill="#006754"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_410"
                    data-name="Group 410"
                    transform="translate(6.569 6.588)"
                  >
                    <g id="Group_409" data-name="Group 409">
                      <path
                        id="Path_4698"
                        data-name="Path 4698"
                        d="M185,183.9l-4-4a.79.79,0,1,0-1.117,1.117l4,4A.79.79,0,0,0,185,183.9Z"
                        transform="translate(-179.652 -179.66)"
                        fill="#006754"
                      />
                    </g>
                  </g>
                </g>
              </Icon>
              Закон Об Инвестициях в КР от 27 марта 2003 года № 66
            </CLink>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mission;
