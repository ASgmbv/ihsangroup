import { Box, Container, Flex, Link, Button } from "@chakra-ui/react";

import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="1"
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Box bg="white">
        <Container maxW="container.xl" d={["none", null, null, "block"]} py="4">
          <Flex justify="space-between" align="center" h="100%">
            <Image
              src="/23.png"
              alt="Логотип компании"
              width={80}
              height={50}
            />
            <Flex>
              <NextLink href="/" passHref>
                <Link
                  px="3"
                  fontSize="sm"
                  fontWeight="semibold"
                  color={pathname === "/" ? "#D5A022" : "#006754"}
                >
                  ГЛАВНАЯ
                </Link>
              </NextLink>
              <NextLink href="/about" passHref>
                <Link
                  px="3"
                  fontSize="sm"
                  fontWeight="semibold"
                  color={pathname === "/about" ? "#D5A022" : "#006754"}
                >
                  О НАС
                </Link>
              </NextLink>
              <NextLink href="/plans" passHref>
                <Link
                  px="3"
                  fontWeight="semibold"
                  fontSize="sm"
                  color={pathname === "/plans" ? "#D5A022" : "#006754"}
                >
                  ПРОГРАММЫ
                </Link>
              </NextLink>
              <NextLink href="/guarantees" passHref>
                <Link
                  px="3"
                  fontWeight="semibold"
                  fontSize="sm"
                  color={pathname === "/guarantees" ? "#D5A022" : "#006754"}
                >
                  ГАРАНТИИ
                </Link>
              </NextLink>
              <NextLink href="/reviews" passHref>
                <Link
                  px="3"
                  fontWeight="semibold"
                  fontSize="sm"
                  color={pathname === "/reviews" ? "#D5A022" : "#006754"}
                >
                  ОТЗЫВЫ
                </Link>
              </NextLink>
              <NextLink href="/contacts" passHref>
                <Link
                  px="3"
                  fontWeight="semibold"
                  fontSize="sm"
                  color={pathname === "/contacts" ? "#D5A022" : "#006754"}
                >
                  КОНТАКТЫ
                </Link>
              </NextLink>
            </Flex>
            <CustomButton>Личный кабинет</CustomButton>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

const CustomButton = ({ children }) => {
  return (
    <Button
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

export default Header;
