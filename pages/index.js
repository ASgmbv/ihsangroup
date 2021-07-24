import Calculator from "@/components/Calculator";
import Layout from "@/components/Layout";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Stack,
} from "@chakra-ui/react";
import Slider from "../components/Slider";
import Mission from "../components/Mission";
import PlansTabs from "../components/PlansTabs";
import GuarantessGrid from "../components/GuarantessGrid";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
	return (
		<>
			<Script strategy="lazyOnload">
				{`
               (function(w,d,u){
                  var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                  var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
               })(window,document,'https://cdn-ru.bitrix24.ru/b18131502/crm/site_button/loader_2_7rlp41.js');
            `}
			</Script>
			<Script strategy="lazyOnload">
				{`
               let widgetHash = '2xhiz0orgjlned4wesn1';
               let gcw = document.createElement('script');
               gcw.type = 'text/javascript';
               gcw.async = true;
               gcw.src = '//widgets.binotel.com/getcall/widgets/'+ widgetHash +'.js';
               let sn = document.getElementsByTagName('script')[0];
               sn.parentNode.insertBefore(gcw, sn);
            `}
			</Script>
			<Layout title="Главная">
				<Slider />

				<Container
					maxW="container.lg2"
					py={["50px", null, "100px"]}
					id="calculator"
				>
					<Calculator />
				</Container>

				<Mission />

				<PlansTabs />

				<Box
					mb={["50px", null, "100px"]}
					backgroundImage="url('/44.jpg')"
					backgroundSize="cover"
					backgroundPosition="bottom"
				>
					<Container maxW="container.lg2" py={14}>
						<Flex
						// flexDirection={["column", null, "row"]}
						>
							<Box flex={3}>
								<Heading mb={1} color="#006754">
									БОНУСНАЯ КАРТА
								</Heading>
								<Stack
									direction="row"
									spacing={14}
									fontSize="xl"
									color="#D5A022"
									letterSpacing="wide"
								>
									<Box>АКЦИИ</Box>
									<Box>СКИДКИ</Box>
									<Box>БОНУСЫ</Box>
								</Stack>
								<Link href="/bonus" passHref>
									<Button
										as="a"
										size="lg"
										w="fit-content"
										lineHeight="1.2"
										borderRadius="0"
										fontSize="14px"
										fontWeight="semibold"
										bg="jashyl"
										color="white"
										border="1px"
										borderColor="jashyl"
										_hover={{
											bg: "transparent",
											color: "jashyl",
										}}
										_active={{
											borderColor: "currentColor",
										}}
										_focus={{
											boxShadow: "none",
										}}
										mt={14}
									>
										Подробнее
									</Button>
								</Link>
							</Box>
							<Box flex={2} position="relative">
								<Image
									display={["none", null, "block"]}
									position="absolute"
									top={-10}
									src="/bonus_card.png"
								/>
							</Box>
						</Flex>
					</Container>
				</Box>

				<GuarantessGrid />
			</Layout>
		</>
	);
}
