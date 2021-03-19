import { Box } from "@chakra-ui/react";
import Header from "./Header";
import ContactsHeader from "./ContactsHeader";
import Footer from "./Footer";
import NextHead from "next/head";

const Layout = ({ title = "", children, posts = [] }) => {
  return (
    <>
      <NextHead>
        <title>{title}</title>
      </NextHead>
      <ContactsHeader />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
