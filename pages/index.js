import Calculator from "@/components/Calculator";
import Layout from "@/components/Layout";
import { Container, Box } from "@chakra-ui/react";

import Callback from "@/components/Callback";
import Slider from "../components/Slider";
import Mission from "../components/Mission";
import PlansTabs from "../components/PlansTabs";
import GuarantessGrid from "../components/GuarantessGrid";

export default function Home() {
  return (
    <>
      <Layout title="Ихсан Груп">
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
