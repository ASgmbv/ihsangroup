import Calculator from "@/components/Calculator";
import Layout from "@/components/Layout";
import { Center, Container, Stack, StatArrow } from "@chakra-ui/react";
import Slider from "../components/Slider";
import Mission from "../components/Mission";
import PlansTabs from "../components/PlansTabs";
import GuarantessGrid from "../components/GuarantessGrid";
import NextHead from "next/head";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import setLanguage from "next-translate/setLanguage";

export default function Home() {
   const { t, lang } = useTranslation("home");

   return (
      <>
         <Layout title={t("title")}>
            <NextHead>
               <script
                  dangerouslySetInnerHTML={{
                     __html: `
                let widgetHash = '2xhiz0orgjlned4wesn1';
                let gcw = document.createElement('script');
                gcw.type = 'text/javascript';
                gcw.async = true;
                gcw.src = '//widgets.binotel.com/getcall/widgets/'+ widgetHash +'.js';
                let sn = document.getElementsByTagName('script')[0];
                sn.parentNode.insertBefore(gcw, sn);
          `,
                  }}
               />
            </NextHead>

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

            <GuarantessGrid />

            <Center width="100%">
               <Stack direction="row" spacing="10">
                  <button onClick={async () => await setLanguage("en")}>
                     EN
                  </button>
                  <button onClick={async () => await setLanguage("kg")}>
                     KG
                  </button>
                  <button onClick={async () => await setLanguage("ru")}>
                     RU
                  </button>
               </Stack>
            </Center>
         </Layout>
      </>
   );
}
