import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Description = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="flex flex-col-reverse mb-12 md:gap-8 md:grid-cols-2 md:grid">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="flex items-center w-full overflow-hidden rounded-md sm:h-60 md:h-auto"
      >
        <Image
          alt="biuro"
          className="w-full md:scale-[3] lg:scale-[1.35]"
          src="/images/services.webp"
          width={556}
          height={456}
        />
      </motion.div>
      <div>
        <h2 className="mb-6 font-serif text-5xl">Nasze usługi</h2>
        <p className="font-light">
          Świadczymy kompleksową pomoc prawną na rzecz osób fizycznych
          nieprowadzących działalności gospodarczej oraz przedsiębiorców zarówno
          w zakresie pojedynczych spraw, jak również poprzez stałą obsługę
          prawną.
        </p>
        <br />
        <p>
          Specjalizujemy się w sprawach z zakresu prawa upadłościowego oraz
          restrukturyzacyjnego.{" "}
        </p>
        <br />

        <p className="font-light">
          Pomagamy przedsiębiorcom, którzy mierzą się z problemami finansowymi,
          wdrożyć i przeprowadzić odpowiedni rodzaj postępowania
          restrukturyzacyjnego dążąc do osiągnięcia celu tego postępowania jakim
          jest zawarcie układu z wierzycielami.
        </p>
        <br />
        <p className="font-bold">
          Dzięki doświadczeniu i indywidualnemu podejściu do każdej sprawy
          doprowadziliśmy do zawarcia kilkudziesięciu układów w postępowaniach
          restrukturyzacyjnych.{" "}
        </p>
        <br />
      </div>
    </div>
  );
};
