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
  Input,
} from "@chakra-ui/react";

const Calculator = () => {
  return (
    <Tabs variant="unstyled" mt="4" width="700px">
      <TabList>
        <Tab
          flex="1"
          bg="#EFF1ED"
          boxShadow="inset 0px -2px 0px 0px #024701"
          color="#024701"
          fontWeight="bold"
          _selected={{
            bg: "white",
            boxShadow:
              "inset 2px 2px 0px 0px #024701, inset -2px 0px 0px 0px #024701",
          }}
        >
          Калькулятор Ихсан Групп
        </Tab>
        <Tab
          flex="1"
          bg="#EFF1ED"
          boxShadow="inset 0px -2px 0px 0px #024701"
          color="#024701"
          fontWeight="bold"
          _selected={{
            bg: "white",
            boxShadow:
              "inset 1px 1px 0px 1px #024701, inset -1px 1px 0px 1px #024701",
          }}
        >
          Ипотечный Калькулятор
        </Tab>
      </TabList>
      <TabPanels boxShadow="inset 1px -1px 0px 1px #024701, inset -1px -1px 0px 1px #024701">
        <TabPanel>
          <Stack spacing="6">
            <CustomRadioGroup />
            <Flex align="center">
              <Text w="230px">Стоимость Квартиры</Text>
              <CustomInput mr="4" />
              <CustomRadioGroupCurrency />
            </Flex>
            <Flex align="center">
              <Text w="230px">Первоначальный взнос</Text>
              <CustomInput mr="4" />
              <CustomRadioGroupCurrency />
              <CustomInput ml="4" w="70px" />
            </Flex>
            <Flex align="center">
              <Text w="230px">Первоначальный взнос</Text>
              <CustomInput />
            </Flex>
            <Flex align="center">
              <Text w="230px">Наценка</Text>
              <CustomInput />
            </Flex>
            <Flex align="center">
              <Text w="230px">Срок договора</Text>
              <CustomInput />
            </Flex>
          </Stack>
        </TabPanel>
        <TabPanel>panel 2</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const CustomInput = (props) => {
  return (
    <Input
      w="120px"
      h="40px"
      borderRadius="0"
      fontWeight="bold"
      color="#006754"
      borderColor="#D5A022"
      {...props}
    />
  );
};

const CustomRadioCurrency = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        border="1px"
        borderColor="#D5A021"
        color="#D5A021"
        borderRadius="0"
        fontWeight="bold"
        textAlign="center"
        w="60px"
        h="40px"
        alignItems="center"
        justifyContent="center"
        bg="white"
        _checked={{
          bg: "#D5A021",
          color: "white",
        }}
        px="2"
        py="1"
      >
        {props.children}
      </Flex>
    </Box>
  );
};

const CustomRadioGroupCurrency = () => {
  const options = ["Сом", "$"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "currency",
    defaultValue: "Сом",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack spacing="0" {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <CustomRadioCurrency key={value} {...radio}>
            {value}
          </CustomRadioCurrency>
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
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        border="1px"
        borderColor="#D5A021"
        color="#D5A021"
        borderRadius="0"
        fontWeight="bold"
        bg="white"
        _checked={{
          bg: "#D5A021",
          color: "white",
        }}
        px="2"
        py="1"
      >
        {props.children}
      </Box>
    </Box>
  );
};

const CustomRadioGroup = () => {
  const options = [
    "25 + 5",
    "35 + 5",
    "50 + 5",
    "Без всноса + 5",
    "Автомобиль",
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "plan",
    defaultValue: "25 + 5",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack spacing="3" {...group}>
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

export default Calculator;
