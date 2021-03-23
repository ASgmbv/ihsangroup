import { Box, Icon, Link } from "@chakra-ui/react";
import Header from "./Header";
import ContactsHeader from "./ContactsHeader";
import Footer from "./Footer";
import NextHead from "next/head";
import { IoLogoWhatsapp } from "react-icons/io";

const Layout = ({ title = "", children }) => {
  return (
    <>
      <NextHead>
        <title>{title}</title>
      </NextHead>
      <ContactsHeader />
      <Header />
      {children}
      <Footer />
      <Link href="https://web.whatsapp.com/send?phone=+996700005151" isExternal>
        <Icon
          as={IoLogoWhatsapp}
          position="fixed"
          boxSize="10"
          color="whatsapp.500"
          bottom="2rem"
          right="2rem"
        />
      </Link>
    </>
  );
};

export default Layout;
