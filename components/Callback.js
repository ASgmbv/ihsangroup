import { Box, Button, Grid, Heading, Input, Stack } from "@chakra-ui/react";

const Callback = (props) => {
  return (
    <Box
      backgroundImage="url('/callback.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      color="white"
      {...props}
    >
      <Box background="rgba(1, 87, 71,0.8)" px={[4, null, 10, 20]} py="8">
        <Grid templateColumns={["repeat(1, 1fr)", null, "70% auto"]} gap="8">
          <Heading color="white" fontWeight="400" size="xl">
            Заказать обратный звонок
          </Heading>
          <Heading color="white" fontWeight="400" size="md"></Heading>
          <Stack direction="row" spacing="10">
            <Input variant="flushed" placeholder="Ваше имя" />
            <Input variant="flushed" placeholder="Ваш Номер" />
          </Stack>
          <CustomButtonYellow>Отправить</CustomButtonYellow>
        </Grid>
      </Box>
    </Box>
  );
};

const CustomButtonYellow = ({ children }) => {
  return (
    <Button
      w="fit-content"
      size="lg"
      lineHeight="1.2"
      borderRadius="0"
      fontSize="14px"
      fontWeight="semibold"
      bg="#D5A022"
      color="white"
      border="1px"
      borderColor="#D5A022"
      _hover={{
        bg: "white",
        color: "#D5A022",
      }}
      _active={{
        // transform: "scale(0.98)",
        borderColor: "currentColor",
      }}
    >
      {children}
    </Button>
  );
};

export default Callback;
