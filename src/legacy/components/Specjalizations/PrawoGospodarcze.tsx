import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Divider } from "components/Divider/Divider";
import Balancer from "react-wrap-balancer";

export const PrawoGospodarcze = () => {
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
        <Balancer>
          PRAWO GOSPODARCZE ORAZ STAŁA OBSŁUGA PRAWNA PRZEDSIĘBIORCÓW
        </Balancer>
      </h3>
      <p className="mb-4">
        Świadczymy pomoc prawną w sprawach gospodarczych oraz kompleksowej
        obsłudze przedsiębiorców w systemie zarówno pojedynczych spraw, jak
        również stałej współpracy z Klientem. Naszym celem jest zapewnienie
        prawidłowego działania przedsiębiorstwa oraz ochrona przed przyszłymi
        skutkami prawnymi decyzji podejmowanych przez właścicieli
        przedsiębiorstw. Stała obsługa prawna może obejmować zarówno niektóre
        aspekty działalności Klienta jak też pełną obsługę wszystkich sfer
        aktywności firmy. Świadczenie stałej obsługi prawnej polega, w
        zależności od potrzeb i charakteru działalności Klienta, na tradycyjnej
        formie konsultacji osobistych z Klientem w jego siedzibie lub w naszym
        Biurze albo udzielaniu porad prawnych za pośrednictwem poczty
        internetowej lub telefonicznie.
      </p>
      <p className="mb-4">
        Zakres obsługi prawnej obejmuje m. in. opiniowanie umów, windykację
        pozasądowa i sądowa należności, pomoc prawną w sporach z kontrahentami,
        redagowanie i opiniowanie dokumentacji związanej z działalnością
        przedsiębiorstwa, zastępstwo prawne przed sądami, urzędami,
        kontrahentami i innymi instytucjami.
      </p>
      <p className="mb-12 font-bold">
        Naszym celem jest pomoc przedsiębiorcom w ich bieżącej działalności i
        wskazanie optymalnych rozwiązań oraz wyjść z trudnych sytuacji.
      </p>
      <Divider id="odszkodowania" />
    </motion.div>
  );
};
