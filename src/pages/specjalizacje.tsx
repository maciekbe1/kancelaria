import { Container } from "components";
import { Restructuring } from "components";
import { motion } from "framer-motion";
import Image from "next/image";

const Specializations = () => {
  return (
    <>
      <div className="w-full h-[400px] lg:h-[540px] flex justify-center items-center overflow-hidden relative bg-black -mt-[86px]">
        <Image
          alt="hero"
          src="/images/specializations.jpg"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <Container className="xs:px-0">
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 55 }}
            transition={{ delay: 0.55, duration: 1 }}
            className="drop-shadow-lg hero-text bg-gradient-to-l from-slate-700"
          >
            <h1 className="py-4 font-bold text-center text-white uppercase font-domine text-header-sm lg:text-header-xl">
              Specjalizacje
            </h1>
          </motion.div>
        </Container>
      </div>
      <Container>
        <Restructuring />
      </Container>
    </>
  );
};

export default Specializations;
