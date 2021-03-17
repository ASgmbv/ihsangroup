import {
  Box,
  Flex,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useRadio,
  useRadioGroup,
  Text,
  Icon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  RadioGroup,
  Radio,
  Button,
  Select,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCar, FaHome } from "react-icons/fa";

const options = ["25%", "35%", "50%"];

const max = {
  [options[0]]: 45000,
  [options[1]]: 55000,
  [options[2]]: 65000,
};

const ratio = 84;

const years = [
  "1 год",
  "2 года",
  "3 года",
  "4 года",
  "5 лет",
  "6 лет",
  "7 лет",
  "8 лет",
  "9 лет",
  "10 лет",
];

const Calculator = () => {
  const [currency, setCurrency] = useState("usd");
  const [price, setPrice] = useState(10000);
  const [deposit, setDeposit] = useState(options[0]);
  const [period, setPeriod] = useState(12);

  const fee = Math.round((price * 4) / 100);
  const depositAmount = Math.round((price * parseInt(deposit)) / 100);

  return (
    <Stack direction={["column", null, null, "row"]} spacing="8">
      <Tabs
        variant="unstyled"
        flex="1"
        boxShadow="inset 0px 0px 0px 2px #006754"
        p={[4, 6, 8]}
      >
        <TabList mb="6" spacing="2">
          <CTab
            mr="3"
            onClick={() => {
              setDeposit(options[0]);
              setPrice(10000);
            }}
          >
            <Icon as={FaHome} boxSize="5" mr="3" />
            <Text d={["none", null, "block"]}>Недвижимость</Text>
          </CTab>

          <CTab
            ml="3"
            onClick={() => {
              setDeposit(options[2]);
            }}
          >
            <Icon as={FaCar} boxSize="5" mr="3" />
            <Text d={["none", null, "block"]}>Автомобиль</Text>
          </CTab>
        </TabList>

        <TabPanels>
          <TabPanel p="0">
            <Text w="230px" mb="4" fontWeight="semibold">
              Стоимость Квартиры
            </Text>
            <Box border="2px solid" p="3" mb="3" borderColor="saryy">
              <Text color="jashyl" fontWeight="bold">
                {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${currency === "usd" ? "$" : "Сом"}`}
              </Text>
              <Slider
                min={currency === "usd" ? 10000 : 10000 * ratio}
                max={currency === "usd" ? max[deposit] : max[deposit] * ratio}
                step={currency === "usd" ? 100 : 1000}
                onChange={setPrice}
                value={price}
              >
                <SliderTrack>
                  <SliderFilledTrack bg="jashyl" />
                </SliderTrack>
                <SliderThumb
                  p="2"
                  boxShadow="inset 0px 0px 0px 4px #006754"
                  _active={{
                    bg: "jashyl",
                  }}
                  _focus={{
                    bg: "jashyl",
                  }}
                />
              </Slider>
            </Box>
            <RadioGroup mb="4">
              <RadioGroup
                value={currency}
                onChange={(e) => {
                  setCurrency(e);
                  setPrice(e === "usd" ? 10000 : 10000 * ratio);
                }}
              >
                <Stack direction="row" justifyContent="flex-end" spacing="6">
                  <CurrencyRadio value={"usd"}>USD</CurrencyRadio>
                  <CurrencyRadio value={"som"}>СОМ</CurrencyRadio>
                </Stack>
              </RadioGroup>
            </RadioGroup>

            <Text w="230px" mb="4" fontWeight="semibold">
              Первоначальный взнос
            </Text>

            <Flex flexDir={["column", "row"]}>
              <DepositRadioGroup
                options={options}
                value={deposit}
                onChange={(el) => {
                  setDeposit(el);
                  setPrice(currency === "usd" ? 10000 : 10000 * ratio);
                }}
              />
              <Flex
                justifyContent="center"
                alignItems="center"
                width={["full", "180px"]}
                bg="#EFF1ED"
                color="saryy"
                fontWeight="bold"
                ml={[0, 6]}
                mt={[6, 0]}
                py={[3, 0]}
              >
                {depositAmount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${currency === "usd" ? "$" : "Сом"}`}
              </Flex>
            </Flex>

            <Flex mt="6" mb="8" flexDir={["column", "row"]}>
              <Box flex="1" mr={[0, 3]}>
                <Text mb="4" fontWeight="semibold">
                  Срок договора
                </Text>
                <Select
                  borderRadius="0"
                  border="2px solid"
                  borderColor="saryy"
                  height="3rem"
                  onChange={(e) => {
                    setPeriod(e.target.value);
                  }}
                >
                  {years.map((el, idx) => {
                    return (
                      <option value={(idx + 1) * 12} key={idx}>
                        {el}
                      </option>
                    );
                  })}
                </Select>
              </Box>
              <Box flex="1" ml={[0, 3]} mt={[4, 0]}>
                <Text mb="4" fontWeight="semibold">
                  Взнос
                </Text>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  height="3rem"
                  bg="#EFF1ED"
                  color="saryy"
                  fontWeight="bold"
                  p="3"
                >
                  {fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    ` ${currency === "usd" ? "$" : "Сом"}`}
                  <Text as="span">4%</Text>
                </Flex>
              </Box>
            </Flex>

            <CustomButtonGreen w="full">Рассчитать</CustomButtonGreen>
          </TabPanel>
          <TabPanel p="0">
            <Text w="230px" mb="4" fontWeight="semibold">
              Стоимость Автомобиля
            </Text>
            <Box border="2px solid" p="3" mb="3" borderColor="saryy">
              <Text color="jashyl" fontWeight="bold">
                {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${currency === "usd" ? "$" : "Сом"}`}
              </Text>
              <Slider
                min={currency === "usd" ? 10000 : 10000 * ratio}
                max={currency === "usd" ? max[deposit] : max[deposit] * ratio}
                step={currency === "usd" ? 100 : 1000}
                onChange={setPrice}
                value={price}
              >
                <SliderTrack>
                  <SliderFilledTrack bg="jashyl" />
                </SliderTrack>
                <SliderThumb
                  p="2"
                  boxShadow="inset 0px 0px 0px 4px #006754"
                  _active={{
                    bg: "jashyl",
                  }}
                  _focus={{
                    bg: "jashyl",
                  }}
                />
              </Slider>
            </Box>
            <RadioGroup mb="4">
              <RadioGroup
                value={currency}
                onChange={(e) => {
                  setCurrency(e);
                  setPrice(e === "usd" ? 10000 : 10000 * ratio);
                }}
              >
                <Stack direction="row" justifyContent="flex-end" spacing="6">
                  <CurrencyRadio value={"usd"}>USD</CurrencyRadio>
                  <CurrencyRadio value={"som"}>СОМ</CurrencyRadio>
                </Stack>
              </RadioGroup>
            </RadioGroup>

            <Text w="230px" mb="4" fontWeight="semibold">
              Первоначальный взнос
            </Text>

            <Flex flexDir={["column", "row"]}>
              <Flex
                border="2px solid"
                borderColor="#D5A021"
                color="white"
                borderRadius="0"
                fontWeight="bold"
                alignItems="center"
                justifyContent="center"
                bg="#D5A021"
                py="3"
                px="8"
              >
                50%
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                width={["full", "180px"]}
                bg="#EFF1ED"
                color="saryy"
                fontWeight="bold"
                ml={[0, 6]}
                mt={[6, 0]}
                py={[3, 0]}
              >
                {depositAmount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${currency === "usd" ? "$" : "Сом"}`}
              </Flex>
            </Flex>

            <Flex mt="6" mb="8" flexDir={["column", "row"]}>
              <Box flex="1" mr={[0, 3]}>
                <Text mb="4" fontWeight="semibold">
                  Срок договора
                </Text>
                <Select
                  borderRadius="0"
                  border="2px solid"
                  borderColor="saryy"
                  height="3rem"
                  onChange={(e) => {
                    setPeriod(e.target.value);
                  }}
                >
                  {years.map((el, idx) => {
                    return (
                      <option value={(idx + 1) * 12} key={idx}>
                        {el}
                      </option>
                    );
                  })}
                </Select>
              </Box>
              <Box flex="1" ml={[0, 3]} mt={[4, 0]}>
                <Text mb="4" fontWeight="semibold">
                  Взнос
                </Text>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  height="3rem"
                  bg="#EFF1ED"
                  color="saryy"
                  fontWeight="bold"
                  p="3"
                >
                  {fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    ` ${currency === "usd" ? "$" : "Сом"}`}
                  <Text as="span">4%</Text>
                </Flex>
              </Box>
            </Flex>

            <CustomButtonGreen w="full">Рассчитать</CustomButtonGreen>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex
        flexDir={["column-reverse", null, null, "column"]}
        flex="1"
        h="full"
      >
        <Box
          bg="#F7F8F6"
          p="6"
          borderBottom="4px"
          borderColor="saryy"
          mb={[0, null, null, 6]}
        >
          <Text
            as="span"
            mr="2"
            color="jashyl"
            fontWeight="semibold"
            fontSize="lg"
          >
            Курсы валют
          </Text>
          <Text as="span" color="#444D49">
            (НБКР 16.03.2021)
          </Text>
          <Table>
            <Tbody>
              <Tr>
                <Td pl="0" borderBottom="1px" borderColor="#9ac799">
                  <Box>
                    <Text color="#444D49" fontWeight="semibold">
                      USD
                    </Text>
                    <Text fontSize="sm" color="#444D49" fontWeight="semibold">
                      (+1.761)
                    </Text>
                  </Box>
                </Td>
                <Td borderBottom="1px" borderColor="#9ac799">
                  <Box textAlign="end">
                    <Text fontWeight="semibold" color="#444D49" mb="2">
                      покупка
                    </Text>
                    <Text color="#59A96A" fontWeight="semibold">
                      82.30
                    </Text>
                  </Box>
                </Td>
                <Td borderBottom="1px" borderColor="#9ac799">
                  <Box textAlign="end">
                    <Text fontWeight="semibold" color="#444D49" mb="2">
                      продажа
                    </Text>
                    <Text color="#59A96A" fontWeight="semibold">
                      82.60
                    </Text>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td pl="0" borderBottom="1px" borderColor="#9ac799">
                  <Box>
                    <Text color="#444D49" fontWeight="semibold">
                      EUR
                    </Text>
                    <Text fontSize="sm" color="#444D49" fontWeight="semibold">
                      (+1.761)
                    </Text>
                  </Box>
                </Td>
                <Td borderBottom="1px" borderColor="#9ac799">
                  <Box textAlign="end">
                    <Text fontWeight="semibold" color="#444D49" mb="2">
                      покупка
                    </Text>
                    <Text color="#59A96A" fontWeight="semibold">
                      82.30
                    </Text>
                  </Box>
                </Td>
                <Td borderBottom="1px" borderColor="#9ac799">
                  <Box textAlign="end">
                    <Text fontWeight="semibold" color="#444D49" mb="2">
                      продажа
                    </Text>
                    <Text color="#59A96A" fontWeight="semibold">
                      82.60
                    </Text>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td pl="0" borderBottom="0px" borderColor="#9ac799">
                  <Box>
                    <Text color="#444D49" fontWeight="semibold">
                      RUB
                    </Text>
                    <Text fontSize="sm" color="#444D49" fontWeight="semibold">
                      (+1.761)
                    </Text>
                  </Box>
                </Td>
                <Td borderBottom="0px" borderColor="#9ac799">
                  <Box textAlign="end">
                    <Text fontWeight="semibold" color="#444D49" mb="2">
                      покупка
                    </Text>
                    <Text color="#59A96A" fontWeight="semibold">
                      82.30
                    </Text>
                  </Box>
                </Td>
                <Td borderBottom="0px" borderColor="#9ac799">
                  <Box textAlign="end">
                    <Text fontWeight="semibold" color="#444D49" mb="2">
                      продажа
                    </Text>
                    <Text color="#59A96A" fontWeight="semibold">
                      82.60
                    </Text>
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box
          bg="#F7F8F6"
          p="6"
          borderBottom="4px"
          borderColor="saryy"
          mb={[6, null, null, 0]}
        >
          <Text
            mr="2"
            color="jashyl"
            fontWeight="semibold"
            fontSize="lg"
            mb="4"
          >
            Результаты расчета
          </Text>
          <Stack spacing="6">
            <Flex justifyContent="space-between">
              <Text>Ежемесячный платеж:</Text>
              <Text color="jashyl" fontWeight="bold">
                {parseInt((price - depositAmount) / period)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${currency === "usd" ? "$" : "Сом"}`}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Сумма займа:</Text>
              <Text color="jashyl" fontWeight="bold">
                {parseInt(price - depositAmount)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${currency === "usd" ? "$" : "Сом"}`}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Взнос:</Text>
              <Text color="jashyl" fontWeight="bold">
                {fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${currency === "usd" ? "$" : "Сом"}`}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Общая выплата:</Text>
              <Text color="jashyl" fontWeight="bold">
                {(fee + price - depositAmount)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${currency === "usd" ? "$" : "Сом"}`}
              </Text>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
};

const CTab = ({ children, ...props }) => {
  return (
    <Tab
      flex="1"
      border="2px solid"
      color="saryy"
      fontWeight="bold"
      borderColor="saryy"
      fontSize="lg"
      _selected={{ color: "white", bg: "saryy" }}
      _focus={{
        boxShadow: "none",
      }}
      {...props}
    >
      {children}
    </Tab>
  );
};

const DepositRadioGroup = ({ options, ...props }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    // name: "plan",
    defaultValue: options[0],
    ...props,
  });
  const group = getRootProps();

  return (
    <HStack spacing={[3, null, 6]} w="full" {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <CustomRadio key={value} {...radio}>
            {value}
          </CustomRadio>
        );
      })}
    </HStack>
  );
};

const CurrencyRadio = ({ children, ...props }) => {
  return (
    <Radio
      _checked={{
        bg: "jashyl",
      }}
      border="2px solid"
      borderColor="saryy"
      _focus={{
        boxShadow: "none",
      }}
      {...props}
    >
      {children}
    </Radio>
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
      bg="jashyl"
      color="white"
      border="1px"
      borderColor="jashyl"
      _hover={{
        bg: "transparent",
        color: "jashyl",
      }}
      _active={{
        borderColor: "currentColor",
      }}
      _focus={{
        boxShadow: "none",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

const CustomRadio = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" flex="1">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        border="2px solid"
        borderColor="#D5A021"
        color="jashyl"
        borderRadius="0"
        fontWeight="bold"
        alignItems="center"
        justifyContent="center"
        bg="white"
        _checked={{
          bg: "#D5A021",
          color: "white",
        }}
        p="3"
      >
        {props.children}
      </Flex>
    </Box>
  );
};

export default Calculator;
