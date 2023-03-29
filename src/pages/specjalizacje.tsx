import { Container } from "components";
import { motion } from "framer-motion";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { LogoIcon } from "icons/LogoIcon";
import { Restrukturyzacje } from "components/Specjalizations/restrukturyzacje";
import { PostepowanieUpadlosciowe } from "components/Specjalizations/PostepowanieUpadlosciowe";
import { PomocPrawna } from "components/Specjalizations/PomocPrawna";
import { PrawoGospodarcze } from "components/Specjalizations/PrawoGospodarcze";
import { Dochodzenie } from "components/Specjalizations/Dochodzenie";
import { Kredyty } from "components/Specjalizations/Kredyty";

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
            <h1 className="py-4 font-bold text-center text-transparent uppercase font-domine text-header-sm lg:text-header-xl bg-gradient-to-r from-gold from-40% to-white to-60% bg-clip-text">
              Specjalizacje
            </h1>
          </motion.div>
        </Container>
      </div>
      <Container>
        <h2 className="my-8 font-serif text-xl text-center md:text-3xl lg:text-5xl">
          <Balancer>
            POSTĘPOWANIA RESTRUKTURYZACYJNE I UPADŁOŚCIOWE - TO NASZA GŁÓWNA
            SPECJALIZACJA
          </Balancer>
        </h2>
        <div className="flex justify-center" id="restrukturyzacje">
          <LogoIcon size={96} />
        </div>
        <Restrukturyzacje />
        <PostepowanieUpadlosciowe />
        <PomocPrawna />
        <PrawoGospodarcze />
        <Dochodzenie />
        <Kredyty />
      </Container>
    </>
  );
};

export default Specializations;
