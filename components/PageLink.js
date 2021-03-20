import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

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

export default PageLink;
