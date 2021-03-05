import { Box } from "@chakra-ui/react";
import Header from "./Header";
import ContactsHeader from "./ContactsHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box>
      <ContactsHeader />
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
