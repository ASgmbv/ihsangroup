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
import { FaCar, FaHome } from "react-icons/fa";

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

const Calculator = () => {
  return (
    <Stack direction="row" spacing="8">
      <Tabs
        variant="unstyled"
        width="50%"
        boxShadow="inset 0px 0px 0px 2px #006754"
        p="8"
      >
        <TabList mb="6" spacing="2">
          <CTab mr="3">
            <Icon as={FaHome} boxSize="5" mr="3" />
            Недвижимость
          </CTab>

          <CTab ml="3">
            <Icon as={FaCar} boxSize="5" mr="3" />
            Автомобиль
          </CTab>
        </TabList>

        <TabPanels>
          <TabPanel p="0">
            <Text w="230px" mb="4" fontWeight="semibold">
              Стоимость Квартиры
            </Text>
            <Box border="2px solid" p="3" mb="3" borderColor="saryy">
              <Text color="jashyl" fontWeight="bold">
                40000
              </Text>
              <Slider>
                <SliderTrack>
                  <SliderFilledTrack bg="jashyl" />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
            <RadioGroup mb="10">
              <Stack direction="row" justifyContent="flex-end" spacing="10">
                <Radio colorScheme="green" value="1">
                  USD
                </Radio>
                <Radio colorScheme="green" value="2">
                  СОМ
                </Radio>
              </Stack>
            </RadioGroup>
            <Text w="230px" mb="4" fontWeight="semibold">
              Первоначальный взнос
            </Text>
            <CustomRadioGroup />
            <Flex mt="6" mb="8">
              <Box flex="1" mr="3">
                <Text w="230px" mb="4" fontWeight="semibold">
                  Срок договора
                </Text>
                <Select
                  borderRadius="0"
                  border="2px solid"
                  borderColor="saryy"
                  height="3rem"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box flex="1" ml="3">
                <Text w="230px" mb="4" fontWeight="semibold">
                  Взнос
                </Text>
                <Select
                  borderRadius="0"
                  border="2px solid"
                  borderColor="saryy"
                  height="3rem"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
            </Flex>
            <CustomButtonGreen w="full">Рассчитать</CustomButtonGreen>
          </TabPanel>
          <TabPanel>panel 2</TabPanel>
        </TabPanels>
      </Tabs>
      <Box w="50%" h="full">
        <Box bg="#F7F8F6" p="6" borderBottom="4px" borderColor="saryy" mb="6">
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
        <Box bg="#F7F8F6" p="6" borderBottom="4px" borderColor="saryy">
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
                361,02 $
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Сумма займа:</Text>
              <Text color="jashyl" fontWeight="bold">
                172 636,40 $
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Взнос:</Text>
              <Text color="jashyl" fontWeight="bold">
                64 906,80 $
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Общая выплата:</Text>
              <Text color="jashyl" fontWeight="bold">
                64 906,80 $
              </Text>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Stack>
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

const CustomRadioGroup = () => {
  const options = ["25%", "35%", "50%", "12,000 $"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "plan",
    defaultValue: "25 + 5",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack spacing="6" {...group} w="100%">
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
