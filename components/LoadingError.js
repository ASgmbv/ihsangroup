import { Alert, AlertIcon } from "@chakra-ui/react";

const LoadingError = (props) => {
  return (
    <Alert status="warning" mx="auto" maxW="400px" {...props}>
      <AlertIcon />
      Ошибка при загрузке
    </Alert>
  );
};

export default LoadingError;
