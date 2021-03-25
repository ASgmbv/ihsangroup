import {
  Box,
  Flex,
  HStack,
  Stack,
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
  Spinner,
  Link,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";
import {
  FaCar,
  FaHome,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from "react-icons/fa";

const options = ["25%", "35%", "50%"];

const max = {
  [options[0]]: 45000,
  [options[1]]: 55000,
  [options[2]]: 65000,
};

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

function reducer(state, { type, payload }) {
  switch (type) {
    case types.setCalculator: {
      const isEstate = payload === "estate";
      const isUsd = state.currency === "usd";
      const minInSomsForEstate = Math.round(10000 * state.rate);
      const minInSomsForAuto = Math.round(1000 * state.rate);
      const maxInSomsForEstate = Math.round(45000 * state.rate);
      const maxInSomsForAuto = Math.round(5000 * state.rate);

      return {
        ...state,
        calculator: payload,
        price: isEstate
          ? isUsd
            ? 10000
            : minInSomsForEstate
          : isUsd
          ? 5000
          : minInSomsForAuto,
        deposit: isEstate ? "25%" : "50%",
        min: isEstate
          ? isUsd
            ? 10000
            : minInSomsForEstate
          : isUsd
          ? 5000
          : minInSomsForAuto,
        max: isEstate
          ? isUsd
            ? 45000
            : maxInSomsForEstate
          : isUsd
          ? 20000
          : maxInSomsForAuto,
      };
    }
    case types.setCurrency: {
      const isUsd = payload === "usd";
      const isEstate = state.calculator === "estate";

      const currPrice = state.price;
      const currRate = state.rate;

      const newPrice = isUsd
        ? Math.round(currPrice / currRate)
        : Math.round(currPrice * currRate);

      const minInSomsForEstate = Math.round(10000 * state.rate);
      const minInSomsForAuto = Math.round(5000 * state.rate);
      const maxInSomsForEstate = Math.round(45000 * state.rate);
      const maxInSomsForAuto = Math.round(20000 * state.rate);

      return {
        ...state,
        currency: payload,
        price: newPrice,
        depositAmount: Math.round((newPrice * parseInt(state.deposit)) / 100),
        min: isEstate
          ? isUsd
            ? 10000
            : minInSomsForEstate
          : isUsd
          ? 5000
          : minInSomsForAuto,
        max: isEstate
          ? isUsd
            ? 45000
            : maxInSomsForEstate
          : isUsd
          ? 20000
          : maxInSomsForAuto,
      };
    }
    case types.setPrice: {
      return {
        ...state,
        price: payload,
        depositAmount: Math.round((payload * parseInt(state.deposit)) / 100),
      };
    }
    case types.setDeposit: {
      const isUsd = state.currency === "usd";
      const isEstate = state.calculator === "estate";
      const { price, rate } = state;

      const minInSomsForEstate = Math.round(10000 * rate);
      const minInSomsForAuto = Math.round(5000 * rate);
      const maxInSomsForEstate = Math.round(max[payload] * rate);

      let newPrice = price;

      if (isEstate) {
        if (isUsd) {
          if (price > max[payload]) {
            newPrice = max[payload];
          }
        } else {
          newPrice = Math.round(max[payload] * rate);
        }
      }

      return {
        ...state,
        deposit: payload,
        price: newPrice,
        min: isEstate
          ? isUsd
            ? 10000
            : minInSomsForEstate
          : isUsd
          ? 5000
          : minInSomsForAuto,
        max: isEstate ? (isUsd ? max[payload] : maxInSomsForEstate) : state.max,
        depositAmount: Math.round((price * parseInt(payload)) / 100),
      };
    }
    case types.setPeriod: {
      return {
        ...state,
        period: payload,
      };
    }
    case types.calculateDetails: {
      const { price, depositAmount, period } = state;
      const fee = Math.round((price * 4) / 100);

      return {
        ...state,
        monthlyPayment: Math.round((price - depositAmount) / period),
        loan: price - depositAmount,
        fee,
        total: fee + price - depositAmount,
        finalPrice: price,
        finalDepositAmount: depositAmount,
        finalCurrency: state.currency,
      };
    }
    case types.startRatesFetching: {
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    }
    case types.successRatesFetching: {
      return {
        ...state,
        isFetching: false,
        isError: false,
        rates: payload,
        rate: payload.rates.USD[0] * 1,
      };
    }
    case types.failureRatesFetching: {
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    }
    default:
      throw new Error("wrong type!");
  }
}

const initialState = {
  calculator: "estate",
  currency: "usd",
  price: 10000,
  deposit: "25%",
  period: 12,
  min: 10000,
  max: 45000,
  depositAmount: 2500,
  monthlyPayment: 0,
  loan: 0,
  fee: 0,
  total: 0,
  rate: null,
  isFetching: false,
  isError: false,
  finalPrice: 0,
  finalDepositAmount: 0,
  finalCurrency: "usd",
};

const types = {
  setCalculator: "setCalculator",
  setCurrency: "setCurrency",
  setPrice: "setPrice",
  setDeposit: "setDeposit",
  setPeriod: "setPeriod",
  calculateDetails: "calculateDetails",
  setRate: "setRate",
  startRatesFetching: "startRatesFetching",
  successRatesFetching: "successRatesFetching",
  failureRatesFetching: "failureRatesFetching",
};

const calculators = {
  estate: "Недвижимость",
  auto: "Автомобиль",
};

// data:
// last_update: "23.03.2021"
// rates:
// CNY: (2) ["13.0397", "down"]
// EUR: (2) ["101.1113", "down"]
// GBP: (2) ["118.3045", "down"]
// RUB: (2) ["1.1438", "down"]
// USD: (2) ["84.8000", "down"]
// UZS: (2) ["0.0081", "down"]

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    calculator,
    currency,
    price,
    deposit,
    period,
    min,
    max,
    depositAmount,
    monthlyPayment,
    loan,
    fee,
    rate,
    rates,
    isFetching,
    isError,

    finalPrice,
    finalDepositAmount,
    finalCurrency,
  } = state;

  useEffect(async () => {
    try {
      dispatch({ type: types.startRatesFetching });
      let response = await fetch("https://valuta.kg/api/rate/nbkr.json");
      response = await response.json();
      dispatch({
        type: types.successRatesFetching,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: types.failureRatesFetching });
    }
  }, []);

  return (
    <Stack direction={["column", null, null, "row"]} spacing="8">
      <Flex
        flex="1"
        boxShadow="inset 0px 0px 0px 2px #006754"
        p={[4, 6, 8]}
        flexDir="column"
      >
        <CalculatorTypeRadioGroup
          name="calculatorType"
          defaultValue={calculator}
          onChange={(e) => {
            dispatch({ type: types.setCalculator, payload: e });
          }}
          spacing={[3, null, 6]}
          width="100%"
          options={[
            {
              title: "estate",
              icon: FaHome,
            },
            {
              title: "auto",
              icon: FaCar,
            },
          ]}
        />

        <Flex flexDir="column" mt="4">
          <Text w="230px" mb="4" fontWeight="semibold">
            {calculator === "estate" ? "Стоимость Квартиры" : "Стоимость Авто"}
          </Text>

          <Box border="2px solid" p="3" mb="3" borderColor="saryy">
            <Text color="jashyl" fontWeight="bold" mb="3">
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                ` ${currency === "usd" ? "$" : "Сом"}`}
            </Text>

            {/* <NumberInput
              value={price}
              onChange={(e) => {
                dispatch({ type: types.setPrice, payload: e });
              }}
              min={min}
              max={max}
            >
              <NumberInputField />
            </NumberInput> */}

            <Slider
              min={min}
              max={max}
              step={currency === "usd" ? 100 : 1000}
              onChange={(e) => {
                dispatch({ type: types.setPrice, payload: e });
              }}
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
                dispatch({ type: types.setCurrency, payload: e });
              }}
            >
              <Stack direction="row" justifyContent="flex-end" spacing="6">
                <CurrencyRadio value={"usd"}>USD</CurrencyRadio>
                <CurrencyRadio value={"som"} isDisabled={rate === null}>
                  СОМ
                </CurrencyRadio>
              </Stack>
            </RadioGroup>
          </RadioGroup>

          <Text w="230px" mb="4" fontWeight="semibold">
            Первоначальный взнос
          </Text>

          <Flex flexDir={["column", "row"]}>
            <DepositRadioGroup
              options={calculator === "estate" ? options : ["50%"]}
              value={deposit}
              onChange={(el) => {
                dispatch({ type: types.setDeposit, payload: el });
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
              {depositAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                ` ${currency === "usd" ? "$" : "Сом"}`}
            </Flex>
          </Flex>

          <Flex mt="6" mb="8" flexDir={["column", "row"]}>
            <Box flex="1">
              <Text mb="4" fontWeight="semibold">
                Срок договора
              </Text>
              <Select
                borderRadius="0"
                border="2px solid"
                borderColor="saryy"
                height="3rem"
                value={period}
                onChange={(e) => {
                  dispatch({
                    type: types.setPeriod,
                    payload: e.target.value,
                  });
                }}
              >
                {(calculator === "estate" ? years : years.slice(0, 3)).map(
                  (el, idx) => {
                    return (
                      <option value={(idx + 1) * 12} key={idx}>
                        {el}
                      </option>
                    );
                  }
                )}
              </Select>
            </Box>
          </Flex>

          <CustomButtonGreen
            w="full"
            onClick={() => {
              dispatch({ type: types.calculateDetails });
            }}
          >
            Рассчитать
          </CustomButtonGreen>
        </Flex>
      </Flex>

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
            {isFetching
              ? "Загрузка"
              : isError
              ? "Ошибка"
              : `НБКР (${rates?.last_update})`}
          </Text>
          {isFetching ? (
            <Flex alignItems="center" justifyContent="center" height="200px">
              <Spinner color="saryy" />
            </Flex>
          ) : isError ? (
            "Ошибка"
          ) : (
            <Table>
              <Tbody>
                <Currency
                  currency="USD"
                  isDown={rates?.rates?.USD[1] === "down"}
                  value={rates?.rates?.USD[0]}
                />
                <Currency
                  currency="EUR"
                  isDown={rates?.rates?.EUR[1] === "down"}
                  value={rates?.rates?.EUR[0]}
                />
                <Currency
                  currency="RUB"
                  isDown={rates?.rates?.RUB[1] === "down"}
                  value={rates?.rates?.RUB[0]}
                />
              </Tbody>
            </Table>
          )}
          <Text mt="4" fontSize="sm">
            * данные с сайта{" "}
            <Link
              isExternal
              href="https://valuta.kg"
              color="blue.300"
              textDecor="underline"
            >
              valuta.kg
            </Link>
          </Text>
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
              <Text>Стоимость недвижимости:</Text>
              <Text color="jashyl" fontWeight="bold">
                {finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${finalCurrency === "usd" ? "$" : "Сом"}`}
              </Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Text>Первоначальный взнос:</Text>
              <Text color="jashyl" fontWeight="bold">
                {finalDepositAmount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${finalCurrency === "usd" ? "$" : "Сом"}`}
              </Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Text>Вступительный взнос: </Text>
              <Text color="jashyl" fontWeight="bold">
                {fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${finalCurrency === "usd" ? "$" : "Сом"}`}
              </Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Text>Сумма финансирования:</Text>
              <Text color="jashyl" fontWeight="bold">
                {loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${finalCurrency === "usd" ? "$" : "Сом"}`}
              </Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Text>Ежемесячный платеж:</Text>
              <Text color="jashyl" fontWeight="bold">
                {monthlyPayment
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  ` ${finalCurrency === "usd" ? "$" : "Сом"}`}
              </Text>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
};

const Currency = ({ currency, isDown, value }) => {
  return (
    <Tr>
      <Td pl="0" borderBottom="1px" borderColor="#9ac799">
        <Flex alignItems="center">
          <Text color="#444D49" fontWeight="semibold">
            {currency}
          </Text>
          {isDown ? (
            <Icon as={FaLongArrowAltDown} color="red.400" />
          ) : (
            <Icon as={FaLongArrowAltUp} color="green.400" />
          )}
        </Flex>
      </Td>
      <Td borderBottom="1px" borderColor="#9ac799">
        <Box textAlign="end">
          <Text color="#59A96A" fontWeight="semibold">
            {Math.round(value * 100) / 100} СОМ
          </Text>
        </Box>
      </Td>
    </Tr>
  );
};

const CalculatorTypeRadioGroup = ({
  options,
  name,
  onChange,
  defaultValue,
  ...props
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    onChange,
    defaultValue,
  });
  const group = getRootProps();

  return (
    <HStack {...group} {...props}>
      {options.map((value) => {
        const radio = getRadioProps({ value: value.title });
        return (
          <CalculatorTypeCustomRadio
            title={value.title}
            icon={value.icon}
            key={value.title}
            {...radio}
          />
        );
      })}
    </HStack>
  );
};

const CalculatorTypeCustomRadio = ({ title, icon, ...props }) => {
  const { getInputProps, getCheckboxProps } = useRadio({ ...props });
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
        color="saryy"
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
        <Icon as={icon} mr="3" />
        <Text display={["none", null, "block"]}>{calculators[title]}</Text>
      </Flex>
    </Box>
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
