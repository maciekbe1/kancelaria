import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Divider } from "components/Divider/Divider";

export const PomocPrawna = () => {
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
        POMOC PRAWNA DLA DŁUŻNIKÓW
      </h3>
      <p className="mb-4">
        Świadczymy pomoc prawną w postępowaniach sądowych o zapłatę, w
        postępowaniach egzekucyjnych, w sporach z bankami i innymi
        wierzycielami. Prowadzimy negocjacje z wierzycielami celem zawarcia
        porozumienia i uchronienia majątku dłużnika przed spieniężeniem.
      </p>
      <p className="mb-12">
        Każda sprawa jest inna i wymaga nieszablonowego podejścia. Po analizie
        sprawy, przeprowadzamy odpowiednie działanie mające na celu zapewnienie
        najskuteczniejszej ochrony interesów dłużnika.
      </p>
      <Divider id="prawo-gospodarcze" />
    </motion.div>
  );
};
