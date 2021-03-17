import { Box } from "@chakra-ui/react";
import Header from "./Header";
import ContactsHeader from "./ContactsHeader";
import Footer from "./Footer";
import NextHead from "next/head";

const Layout = ({ title = "", children }) => {
  return (
    <>
      <NextHead>
        <title>{title}</title>
      </NextHead>
      <Box>
        <ContactsHeader />
        <Header />
        <Box>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
