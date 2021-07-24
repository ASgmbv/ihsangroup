import { Icon, Link } from "@chakra-ui/react";
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
			<Link
				href="https://api.whatsapp.com/send?phone=+996700005151"
				isExternal
			>
				<Icon
					as={IoLogoWhatsapp}
					position="fixed"
					boxSize="14"
					color="whatsapp.500"
					bottom="8rem"
					right="3.5rem"
				/>
			</Link>
		</>
	);
};

export default Layout;
