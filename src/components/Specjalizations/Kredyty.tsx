import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Kredyty = () => {
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
        ROSZCZENIA Z UMÓW KREDYTÓW W CHF
      </h3>
      <p className="mb-4">
        Kompleksowo reprezentujemy klientów w sporach z bankami wynikającymi z
        umów kredytów denominowanych bądź indeksowanych do waluty franka
        szwajcarskiego (CHF).
      </p>
      <p className="mb-4">
        Reprezentujemy kredytobiorców na etapie przedsądowym prowadząc rozmowy z
        bankiem celem zawarcia ugody oraz na etapie sądowym, mającym na celu
        unieważnienie bądź „odfrankowienie” kredytu.
      </p>
    </motion.div>
  );
};
