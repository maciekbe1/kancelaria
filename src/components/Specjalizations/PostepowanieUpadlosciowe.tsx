import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Divider } from "components/Divider/Divider";

export const PostepowanieUpadlosciowe = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <h3 className="mt-12 mb-12 font-serif text-xl font-bold text-center lg:text-3xl">
        POSTĘPOWANIE UPADŁOŚCIOWE
      </h3>
      <p className="mb-4">
        Świadczymy pomoc prawą w postępowaniu o ogłoszenie upadłości
        przedsiębiorców oraz osób fizycznych nieprowadzących działalności
        gospodarczej (tzw. upadłość konsumencka) oraz w postępowaniu
        upadłościowym. Sporządzamy niezbędne pisma oraz reprezentujemy upadłych
        przed syndykiem i sądem upadłościowym.
      </p>
      <p className="mb-4 font-bold">Czym jest upadłość konsumencka? </p>
      <p className="mb-4">
        Upadłość konsumencka jest postępowaniem, które daje możliwość umorzenia
        zobowiązań pieniężnych. Skierowana jest ona do osób, które z różnych
        przyczyn nie są w stanie spłacać swoich zobowiązań. Według obecnie
        obowiązujących przepisów z upadłości konsumenckiej mogą skorzystać
        osoby, które nieświadomie przyczyniły się do swojego zadłużenia, jak
        również osoby, które świadomie brały pożyczki i popadły w spiralę
        zadłużeniową.
      </p>
      <p className="mb-4">
        Z upadłości konsumenckiej mogą skorzystać osoby fizyczne, które nie
        prowadzą działalności gospodarczej, jak również osoby, które prowadziły
        jednoosobową działalność gospodarczą, po zamknięciu tej działalności.{" "}
      </p>
      <p className="mb-4">
        W ramach upadłości konsumenckiej możliwe jest także zawarcie z
        wierzycielami układu co do spłaty zadłużenia na dogodnych dla dłużnika
        warunkach.
      </p>
      <p className="mb-12">
        Ogłoszenie upadłości konsumenckiej powoduje zawieszenie postępowań
        egzekucyjnych, a po uprawomocnieniu się postanowienia o ogłoszeniu
        upadłości, wszystkie postępowania egzekucyjne zostają umorzone z mocy
        prawa.
      </p>
      <Divider id="pomoc-prawna" />
    </motion.div>
  );
};
