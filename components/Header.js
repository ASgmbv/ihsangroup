import {
  Box,
  Container,
  Flex,
  Link,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import NextLink from "next/link";
import { pages } from "@/utils/website-config";
import PageLink from "@/components/PageLink";

const Header = () => {
  const router = useRouter();
  const currentPathname = router.pathname;

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="2"
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
                  width="80px"
                  height="50px"
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
            <Link isExternal href="http://lk.ihsan.kg">
              <CustomButton as="link">Личный кабинет</CustomButton>
            </Link>
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
