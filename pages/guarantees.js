import Callback from "@/components/Callback";
import Layout from "@/components/Layout";
import {
  Box,
  Image,
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  Stack,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { BsQuestionCircleFill } from "react-icons/bs";

const Guarantees = () => {
  return (
    <Layout>
      <Flex
        w="full"
        backgroundImage="url('/14.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        h={["300px"]}
      >
        <Box h="full" w="full" background="rgba(1, 87, 71,0.8)">
          <Container maxW="container.xl" h="full">
            <Flex flexDir="column" justify="center" align="center" h="full">
              <Heading
                color="white"
                size="2xl"
                fontWeight="500"
                lineHeight="1.3"
                mb="6"
              >
                Гарантии
              </Heading>
            </Flex>
          </Container>
        </Box>
      </Flex>
      {/**---------------------- */}
      <Flex py="100px">
        <Container maxW="container.xl">
          <Grid templateColumns={["1fr", null, null, "1fr 1fr"]} gap="20">
            <Flex>
              <Image
                src="/21.png"
                alt="Ихсан Групп"
                objectFit="cover"
                w="full"
                display={["none", null, null, "block"]}
              />
            </Flex>
            <Stack direction="column" spacing="6">
              <Text color="saryy" letterSpacing="widest" fontSize="sm">
                МНЕНИЕ ЭКСПЕРТА
              </Text>
              <Heading color="jashyl" fontWeight="500" size="xl">
                Ихсан Групп меняет представление о покупке недвижимости
              </Heading>
              <Text lineHeight="taller">
                Рынок ипотеки становится все более цивилизованным, а нынешние
                клиенты — потенциальные заемщики — это уже не те физические
                лица, которые приходили за кредитом на недвижимость года 2
                назад.
              </Text>
              <Text lineHeight="taller">
                И данная ситуация меняется на глазах — наши дети уже с
                младенчества привыкают к терминам «ипотека» и «аннуитет», а
                также учатся планировать свой бюджет с учетом ежемесячных
                платежей. Считаю, что финансовая грамотность не может не иметь
                четких границ в своем развитии.
              </Text>
              <Text
                textAlign="end"
                fontWeight="semibold"
                fontSize="lg"
                color="#DAAC3D"
                mb="4"
              >
                Динара Заирова, Финансовый Директор
              </Text>
              <Box
                bg="#EFF1ED"
                borderLeft="3px solid"
                borderColor="saryy"
                px="8"
                py="3"
                color="#444D4A"
                fontWeight="semibold"
                fontSize="lg"
              >
                Связаться для консультации +996 700 005 151
              </Box>
            </Stack>
          </Grid>
        </Container>
      </Flex>
      {/**---------------------- */}
      <Box pb="100px" bg="#F6F8F6">
        <Container maxW="container.xl" py="100px">
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
          </Flex>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box>
        <Container maxW="container.xl" py="100px">
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
              С нами вы инвестируете с свою <br /> финансовую безопасность
            </Heading>
          </Flex>
          <Accordion allowToggle={true}>
            <AccordionItem>
              <AccordionButton justifyContent="space-between" py="4">
                <Flex alignItems="center">
                  <Icon as={BsQuestionCircleFill} mr="3" color="saryy" />
                  Что такое кооператив «Ихсан Групп»?
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>panel</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton justifyContent="space-between" py="4">
                <Flex alignItems="center">
                  <Icon as={BsQuestionCircleFill} mr="3" color="saryy" />
                  Если у меня нет денег для первоначального взноса?
                </Flex>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>panel</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton justifyContent="space-between" py="4">
                <Flex alignItems="center">
                  <Icon as={BsQuestionCircleFill} mr="3" color="saryy" />У меня
                  есть 25% от стоимости жилья, как скоро я заеду в квартиру?
                </Flex>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>panel</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton justifyContent="space-between" py="4">
                <Flex alignItems="center">
                  <Icon as={BsQuestionCircleFill} mr="3" color="saryy" />В какой
                  срок приобретается недвижимость для пайщика?
                </Flex>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>panel</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton justifyContent="space-between" py="4">
                <Flex alignItems="center">
                  <Icon as={BsQuestionCircleFill} mr="3" color="saryy" />
                  Могу ли я получить жилье, если я работаю неофициально?
                </Flex>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>panel</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton justifyContent="space-between" py="4">
                <Flex alignItems="center">
                  <Icon as={BsQuestionCircleFill} mr="3" color="saryy" />
                  Кто такой пайщик?
                </Flex>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>panel</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton justifyContent="space-between" py="4">
                <Flex alignItems="center">
                  <Icon as={BsQuestionCircleFill} mr="3" color="saryy" />
                  Можете ли Вы выселить пайщика и продать квартиру без его
                  ведома?
                </Flex>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>panel</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton justifyContent="space-between" py="4">
                <Flex alignItems="center">
                  <Icon as={BsQuestionCircleFill} mr="3" color="saryy" />
                  Могу ли я продать невыкупленную квартиру, являясь пайщиком
                  кооператива?
                </Flex>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>panel</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton justifyContent="space-between" py="4">
                <Flex alignItems="center">
                  <Icon as={BsQuestionCircleFill} mr="3" color="saryy" />
                  Могу ли я досрочно закрыть долг перед кооперативом за
                  выкупаемую, в рассрочку, квартиру?
                </Flex>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>panel</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>
      {/**---------------------- */}
      <Box py="100px">
        <Container maxW="container.xl">
          <Callback />
        </Container>
      </Box>
      {/**---------------------- */}
    </Layout>
  );
};

const Card = ({ icon, title, content, ...props }) => {
  return (
    <Flex border="1px solid" borderColor="gray.200" p="6" {...props}>
      {/* <Image src={icon} boxSize="50px" mr="6" /> */}
      {icon}
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

const CustomGrid = (props) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="10" {...props}>
      <Card
        icon={
          <Icon viewBox="0 0 47.712 47.712" boxSize="12">
            <path
              id="Path_4625"
              data-name="Path 4625"
              d="M214.635,191.786a4.193,4.193,0,1,0-4.2-4.193A4.2,4.2,0,0,0,214.635,191.786Zm0-5.591a1.4,1.4,0,1,1-1.4,1.4A1.4,1.4,0,0,1,214.635,186.195Z"
              transform="translate(-190.826 -166.309)"
              fill="#eec643"
            />
            <path
              id="Path_4626"
              data-name="Path 4626"
              d="M1.4,27.369h1.45V46.314a1.4,1.4,0,0,0,1.4,1.4h39.22a1.4,1.4,0,0,0,1.4-1.4V27.369h1.45a1.4,1.4,0,0,0,1.4-1.4V21.312A1.4,1.4,0,0,0,46.8,20L25.254,11.928V8.387H32a1.4,1.4,0,0,0,1.4-1.4V1.4A1.4,1.4,0,0,0,32,0H23.856a1.4,1.4,0,0,0-1.4,1.4v10.53L.907,20A1.4,1.4,0,0,0,0,21.312v4.659a1.4,1.4,0,0,0,1.4,1.4ZM14.007,44.916H11.2V34.358a1.4,1.4,0,0,1,1.4-1.4h.012a1.4,1.4,0,0,1,1.4,1.4Zm8.4,0V32.466a1.4,1.4,0,0,1,1.4-1.4h.012a1.4,1.4,0,0,1,1.4,1.4v12.45Zm14.106,0H33.7V34.358a1.4,1.4,0,0,1,1.4-1.4h.012a1.4,1.4,0,0,1,1.4,1.4ZM25.254,2.8H30.6v2.8H25.254ZM2.8,22.281l21.06-7.891,21.06,7.891v2.293H31.268a1.4,1.4,0,1,0,0,2.8h10.8V44.916H39.307V34.358a4.2,4.2,0,0,0-4.193-4.193H35.1a4.2,4.2,0,0,0-4.193,4.193V44.916h-2.9V32.466a4.2,4.2,0,0,0-4.193-4.193H23.8a4.2,4.2,0,0,0-4.193,4.193v12.45H16.8V34.358a4.2,4.2,0,0,0-4.193-4.193H12.6A4.2,4.2,0,0,0,8.4,34.358V44.916H5.644V27.369H16.35a1.4,1.4,0,0,0,0-2.8H2.8Z"
              transform="translate(0 0)"
              fill="#eec643"
            />
          </Icon>
        }
        title="В пределах нормы ЖК"
        content="Управленческая деятельность организации регламентирована нормами Жилищного  и Гражданского Кодексов КР."
      />
      <Card
        icon={
          <Icon viewBox="0 0 39.852 37.588" boxSize="12">
            <path
              id="Path_4640"
              data-name="Path 4640"
              d="M38.685,19.234a3.879,3.879,0,0,1-3.462-2.018l-.164-.31a1.177,1.177,0,0,0-1.044-.609H27.787a1.177,1.177,0,0,0-1.044.609l-.164.31a3.676,3.676,0,0,1-.208.345,54.314,54.314,0,0,0-4.966-5.383V8.58A11.046,11.046,0,0,0,23.74,1.835V1.1A1.136,1.136,0,0,0,22.572,0h-.778c-2.162,0-4.983,1.321-6.227,1.964C14.323,1.321,11.5,0,9.34,0H8.562A1.136,1.136,0,0,0,7.394,1.1v.734A11.047,11.047,0,0,0,9.73,8.58v3.6C4.862,16.9,0,22.582,0,29.145v.079c.011,4.612,4.055,8.364,9.014,8.364H22.12a9.473,9.473,0,0,0,5.153-1.514,12.417,12.417,0,0,0,3.292,1.467,1.235,1.235,0,0,0,.671,0,12.025,12.025,0,0,0,6.225-4.115,10.9,10.9,0,0,0,2.39-6.807V20.336a1.136,1.136,0,0,0-1.168-1.1ZM12.065,9.324H19.07v2.2H12.065Zm2.9-5.148a1.229,1.229,0,0,0,1.2,0A17.153,17.153,0,0,1,21.4,2.224a8.822,8.822,0,0,1-1.759,4.9H11.5a8.821,8.821,0,0,1-1.759-4.9,17.152,17.152,0,0,1,5.231,1.951ZM9.014,35.385A6.455,6.455,0,0,1,2.335,29.22v-.075c0-5.775,4.52-11.019,9.053-15.417h8.357a51.672,51.672,0,0,1,4.826,5.242,4.089,4.089,0,0,1-1.454.265,1.136,1.136,0,0,0-1.168,1.1V26.62a10.9,10.9,0,0,0,2.39,6.807,11.765,11.765,0,0,0,1.048,1.16,7.068,7.068,0,0,1-3.268.8Zm28.5-8.766A9.2,9.2,0,0,1,30.9,35.331a9.2,9.2,0,0,1-6.616-8.711V21.334A6.158,6.158,0,0,0,28.5,18.5H33.3a6.158,6.158,0,0,0,4.213,2.834Z"
              transform="translate(0 0)"
              fill="#eec643"
            />
          </Icon>
        }
        title="В пределах нормы ЖК"
        content="Управленческая деятельность организации регламентирована нормами Жилищного  и Гражданского Кодексов КР."
      />
      <Card
        icon={
          <Icon viewBox="0 0 32.966 40.534" boxSize="12">
            <path
              id="Union_2"
              data-name="Union 2"
              d="M3.8,40.534A3.56,3.56,0,0,1,.973,34.573,3.56,3.56,0,0,1,3.8,28.613h3.9A15.315,15.315,0,0,1,0,15.5C0,6.953,7.4,0,16.482,0S32.964,6.953,32.964,15.5a15.316,15.316,0,0,1-7.708,13.114h3.9a3.56,3.56,0,0,1,2.832,5.961,3.56,3.56,0,0,1-2.832,5.961ZM2.537,36.958A1.233,1.233,0,0,0,3.8,38.149H29.161a1.194,1.194,0,1,0,0-2.384H3.8A1.233,1.233,0,0,0,2.537,36.958Zm0-4.769A1.233,1.233,0,0,0,3.8,33.381H29.161a1.194,1.194,0,1,0,0-2.384H3.8A1.233,1.233,0,0,0,2.537,32.189Zm0-16.69c0,7.23,6.256,13.114,13.946,13.114S30.429,22.729,30.429,15.5,24.172,2.384,16.482,2.384,2.537,8.268,2.537,15.5Zm9.16,10.3c-.86,0-1.557-.469-1.557-1.047s.7-1.046,1.557-1.046h9.34c.86,0,1.557.468,1.557,1.046s-.7,1.047-1.557,1.047Zm-1-9.974a8.923,8.923,0,0,1-.5-3.954,5.952,5.952,0,0,1,.7-2.2,8.358,8.358,0,0,1,9.568-4.124A1.093,1.093,0,0,1,21.281,6.9a1.179,1.179,0,0,1-1.436.767,6.034,6.034,0,0,0-6.228,2,5.852,5.852,0,0,0-1.048,2.2,5.263,5.263,0,0,0-.073,1.756,6.357,6.357,0,0,0,.81,2.2,6.01,6.01,0,0,0,6.539,2.432,1.178,1.178,0,0,1,1.436.767,1.093,1.093,0,0,1-.816,1.352,8.753,8.753,0,0,1-2.188.28A8.22,8.22,0,0,1,10.7,15.821Z"
              transform="translate(0 0)"
              fill="#eec643"
            />
          </Icon>
        }
        title="В пределах нормы ЖК"
        content="Управленческая деятельность организации регламентирована нормами Жилищного  и Гражданского Кодексов КР."
      />
      <Card
        icon={
          <Icon viewBox="0 0 36.696 46.76" boxSize="12">
            <g id="file" transform="translate(-1)">
              <g id="Group_288" data-name="Group 288">
                <path
                  id="Path_4637"
                  data-name="Path 4637"
                  d="M90.407,30.5,85.5,29.067V3.749A3.753,3.753,0,0,0,81.751,0H65.018a2.3,2.3,0,0,0-1.633.676l-7.61,7.61A2.3,2.3,0,0,0,55.1,9.92V38.277a3.753,3.753,0,0,0,3.749,3.749H76.709a3.783,3.783,0,0,0,1.806,2.038l3.822,2.246.077.042a3.828,3.828,0,0,0,3.436,0l.039-.02,3.859-2.268a3.784,3.784,0,0,0,2.046-3.373V32.324A1.894,1.894,0,0,0,90.407,30.5ZM63.258,4.682V8.16H59.78ZM77.855,30.5a1.894,1.894,0,0,0-1.387,1.824v6.959H58.847a1.007,1.007,0,0,1-1.006-1.006V10.9h6.788A1.371,1.371,0,0,0,66,9.531V2.743H81.751a1.007,1.007,0,0,1,1.006,1.006v25.32ZM88.468,41.638l-.039.02-3.848,2.261a1.074,1.074,0,0,1-.9,0L79.87,41.68l-.077-.042a1.055,1.055,0,0,1-.583-.947V32.962l4.92-1.438,4.92,1.438v7.729h0A1.055,1.055,0,0,1,88.468,41.638Z"
                  transform="translate(-54.098 0)"
                  fill="#eec643"
                />
              </g>
            </g>
          </Icon>
        }
        title="В пределах нормы ЖК"
        content="Управленческая деятельность организации регламентирована нормами Жилищного  и Гражданского Кодексов КР."
      />
      <Card
        icon={
          <Icon viewBox="0 0 39.852 35.954" boxSize="12">
            <g id="Group_292" data-name="Group 292" transform="translate(0 0)">
              <g
                id="Group_291"
                data-name="Group 291"
                transform="translate(0 0)"
              >
                <path
                  id="Path_4642"
                  data-name="Path 4642"
                  d="M39.471,29.058,35.52,25.331V17.259a1.264,1.264,0,0,0-1.3-1.226h-5.2a1.264,1.264,0,0,0-1.3,1.226v.718L20.845,11.49a1.356,1.356,0,0,0-1.838,0L.381,29.058a1.177,1.177,0,0,0,0,1.733,1.356,1.356,0,0,0,1.838,0L4.332,28.8v17.06a1.264,1.264,0,0,0,1.3,1.226H34.221a1.264,1.264,0,0,0,1.3-1.226V28.8l2.113,1.993a1.356,1.356,0,0,0,1.838,0A1.177,1.177,0,0,0,39.471,29.058Zm-6.55,15.575H6.931V26.347l13-12.257,13,12.257V44.633Zm0-21.753-2.6-2.451V18.485h2.6Z"
                  transform="translate(0 -11.131)"
                  fill="#eec643"
                />
              </g>
            </g>
            <path
              id="Path_4643"
              data-name="Path 4643"
              d="M243.81,68.575a5.1,5.1,0,0,0,2.056.8V69.6a1.308,1.308,0,0,0,2.612,0v-.349a3.978,3.978,0,0,0,2.719-3.022,3.446,3.446,0,0,0-2.49-3.916,10.108,10.108,0,0,1-2.468-1.075.556.556,0,0,1-.1-.516.856.856,0,0,1,.58-.669,2.258,2.258,0,0,1,2.055.487,1.345,1.345,0,0,0,1.762-.521,1.2,1.2,0,0,0-.506-1.638,5,5,0,0,0-1.556-.733v-.19a1.308,1.308,0,0,0-2.612,0v.27c-2.526.8-3.143,4.041-1.239,5.449a11.956,11.956,0,0,0,3.209,1.46.986.986,0,0,1,.785,1.185,1.443,1.443,0,0,1-1.458,1.168,2.734,2.734,0,0,1-1.923-.471,1.354,1.354,0,0,0-1.808.356,1.19,1.19,0,0,0,.378,1.7Z"
              transform="translate(-227.212 -42.309)"
              fill="#eec643"
            />
          </Icon>
        }
        title="В пределах нормы ЖК"
        content="Управленческая деятельность организации регламентирована нормами Жилищного  и Гражданского Кодексов КР."
      />
      <Card
        icon={
          <Icon viewBox="0 0 38.881 41.876" boxSize="12">
            <path
              id="Path_4634"
              data-name="Path 4634"
              d="M71.369,308.708c-.054-1.62-.422-2.552-1.194-3.021-2.55-1.55-6.885.215-9.568,1.578a2.534,2.534,0,0,0-2.317-.9l-3.586.449a3.706,3.706,0,0,1-1.842-.247,7.746,7.746,0,0,0-4.038-.576c-3.7.4-3.6.683-4.62,1.145a10.36,10.36,0,0,1-1.958.31,2.623,2.623,0,0,0-2.387-1.464H35.1a2.538,2.538,0,0,0-2.609,2.454v11.116a2.538,2.538,0,0,0,2.609,2.454h4.76a2.593,2.593,0,0,0,2.515-1.8l1.946-.333c.548-.076-.134-.081,11.574.672a11.206,11.206,0,0,0,8.457-2.972c6.5-6.255,5.4-5.2,5.53-5.321A4.714,4.714,0,0,0,71.369,308.708ZM39.86,319.553H35.1V308.437h4.76v11.116Zm28.146-9.005c-6.5,6.255-5.4,5.2-5.53,5.32a8.479,8.479,0,0,1-6.4,2.23l-10.519-.677a9.882,9.882,0,0,0-3.084.275v-7.8a10.844,10.844,0,0,0,2.865-.546c.969-.439.626-.579,3.786-.919a5.084,5.084,0,0,1,2.714.393,6.468,6.468,0,0,0,3.215.424l3.475-.435a2.015,2.015,0,0,1-.009,1.31.659.659,0,0,1-.417.354c-1.446.508-1.446.508-7.652,1.352a1.241,1.241,0,0,0-1.1,1.39,1.294,1.294,0,0,0,1.478,1.039c6.362-.865,6.484-.881,8.193-1.482a3.23,3.23,0,0,0,2.218-3.032c2.411-1.318,5.967-2.686,7.383-2.069a4.1,4.1,0,0,1,.148,1.113A2.358,2.358,0,0,1,68.006,310.548Z"
              transform="translate(-32.491 -280.131)"
              fill="#eec643"
            />
            <path
              id="Path_4635"
              data-name="Path 4635"
              d="M157.929,23.392c6.858,0,12.438-5.247,12.438-11.7S164.787,0,157.929,0s-12.438,5.247-12.438,11.7S151.071,23.392,157.929,23.392Zm0-20.938c5.42,0,9.829,4.146,9.829,9.242s-4.409,9.242-9.829,9.242S148.1,16.792,148.1,11.7,152.509,2.454,157.929,2.454Z"
              transform="translate(-135.662 0)"
              fill="#eec643"
            />
            <path
              id="Path_4636"
              data-name="Path 4636"
              d="M243.81,68.526a5.1,5.1,0,0,0,2.054.8v.216a1.307,1.307,0,0,0,2.609,0V69.2a3.966,3.966,0,0,0,2.716-3.011,3.432,3.432,0,0,0-2.487-3.9,10.113,10.113,0,0,1-2.466-1.071.552.552,0,0,1-.1-.514.853.853,0,0,1,.579-.667,2.261,2.261,0,0,1,2.053.486A1.346,1.346,0,0,0,250.533,60a1.189,1.189,0,0,0-.506-1.632,5,5,0,0,0-1.554-.731v-.19a1.307,1.307,0,0,0-2.609,0v.269c-2.524.8-3.14,4.025-1.238,5.428a11.964,11.964,0,0,0,3.206,1.454.982.982,0,0,1,.784,1.181,1.44,1.44,0,0,1-1.456,1.164,2.738,2.738,0,0,1-1.922-.469,1.356,1.356,0,0,0-1.806.355,1.183,1.183,0,0,0,.378,1.7Z"
              transform="translate(-224.89 -51.622)"
              fill="#eec643"
            />
          </Icon>
        }
        title="В пределах нормы ЖК"
        content="Управленческая деятельность организации регламентирована нормами Жилищного  и Гражданского Кодексов КР."
      />
    </Grid>
  );
};

export default Guarantees;
