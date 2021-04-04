import Calculator from "@/components/Calculator";
import Layout from "@/components/Layout";
import { Container, Box } from "@chakra-ui/react";

import Callback from "@/components/Callback";
import Slider from "../components/Slider";
import Mission from "../components/Mission";
import PlansTabs from "../components/PlansTabs";
import GuarantessGrid from "../components/GuarantessGrid";
import NextHead from "next/head";

export default function Home() {
  return (
    <>
      <Layout title="Ихсан Груп">
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

        <Container maxW="container.lg2" py={["50px", null, "100px"]}>
          <Calculator />
        </Container>

        <Mission />

        <PlansTabs />

        <GuarantessGrid />

        <Box>
          <Container maxW="container.lg2" pb="100px">
            <Callback />
          </Container>
        </Box>
      </Layout>
    </>
  );
}
