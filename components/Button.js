import { Button } from "@chakra-ui/react";

export const ButtonGreen = ({ children, ...props }) => {
  return (
    <Button
      size="lg"
      w="fit-content"
      lineHeight="1.2"
      borderRadius="0"
      fontSize="14px"
      fontWeight="semibold"
      bg="transparent"
      color="jashyl"
      border="1px"
      borderColor="jashyl"
      _hover={{
        bg: "jashyl",
        color: "white",
      }}
      _active={{
        borderColor: "currentColor",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
