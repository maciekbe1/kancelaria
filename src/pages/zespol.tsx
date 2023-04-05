import { AgentCart, Container } from "components";
import { motion } from "framer-motion";
import Image from "next/image";
import { agents } from "../components/AgentSwiper/constants";

const About = () => {
  return (
    <>
      <div className="w-full h-[400px] lg:h-[540px] flex justify-center items-center overflow-hidden relative bg-black">
        <Image
          alt="hero"
          src="/images/about.webp"
          fill
          className="object-cover opacity-60"
          priority
          quality={100}
        />
        <Container className="xs:p-0">
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 55 }}
            transition={{ delay: 0.55, duration: 1 }}
            className=" drop-shadow-lg bg-gradient-to-l from-slate-700"
          >
            <h1 className="py-4 font-bold text-center text-white uppercase font-domine text-header-md lg:text-header-xl">
              <span className="py-1 text-gold">Zespół</span> Kancelarii
            </h1>
          </motion.div>
        </Container>
      </div>
      <Container>
        {agents.map((agent, index) => (
          <AgentCart
            key={index}
            agent={agent}
            isImageRight={Boolean(index % 2)}
          />
        ))}
      </Container>
    </>
  );
};
export default About;
