import { Container, Hero, ServicesSection } from "components";
import useHeaderState from "hooks/useHeaderState";
import dynamic from "next/dynamic";

const AgentSwiper = dynamic(() =>
  import("components").then((module) => module.AgentSwiper)
);
export default function Home() {
  const { isMobile } = useHeaderState();

  return (
    <>
      <Hero />
      <Container>
        {!isMobile && <AgentSwiper className="hidden sm:block" />}
        <ServicesSection />
      </Container>
    </>
  );
}
