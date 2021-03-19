import { Box, Container, Flex, Link, Button, HStack } from "@chakra-ui/react";

import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";

const pages = [
  { title: "ГЛАВНАЯ", pathname: "/" },
  { title: "О НАС", pathname: "/about" },
  { title: "НОВОСТИ", pathname: "/news" },
  { title: "ПРОГРАММЫ", pathname: "/plans" },
  { title: "ГАРАНТИИ", pathname: "/guarantees" },
  { title: "ОТЗЫВЫ", pathname: "/reviews" },
  { title: "КОНТАКТЫ", pathname: "/contacts" },
];

const PageLink = ({ children, pathname, currentPathname }) => {
  return (
    <NextLink href={pathname} passHref>
      <Link
        fontSize="sm"
        fontWeight="bold"
        fontFamily="Montserrat, sans-serif"
        color={pathname === currentPathname ? "#D5A022" : "#006754"}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Header = () => {
  const router = useRouter();
  const currentPathname = router.pathname;

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
        <Container
          maxW="container.lg2"
          d={["none", null, null, "block"]}
          py="4"
        >
          <Flex justify="space-between" align="center" h="100%">
            <NextLink href={"/"}>
              <a>
                <Image
                  src="/logo.svg"
                  alt="Логотип компании"
                  width={80}
                  height={50}
                />
              </a>
            </NextLink>
            <HStack align="center" spacing="6">
              {pages.map(({ title, pathname }, index) => (
                <PageLink
                  pathname={pathname}
                  currentPathname={currentPathname}
                  key={"page-link-" + index}
                >
                  {title}
                </PageLink>
              ))}
            </HStack>
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
