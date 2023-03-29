import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Divider } from "components/Divider/Divider";
import Balancer from "react-wrap-balancer";

export const Dochodzenie = () => {
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
        <Balancer>DOCHODZENIE ROSZCZEŃ ODSZKODOWAWCZYCH</Balancer>
      </h3>
      <p className="mb-4">
        Świadczymy kompleksową pomoc prawną mającą na celu dochodzenie
        odszkodowań oraz zadośćuczynienia za doznaną krzywdę z tytułu:
      </p>
      <ul className="list-disc">
        <li className="mb-4 ml-10 font-bold">
          szkód komunikacyjnych - zarówno majątkowych i osobowych
        </li>
        <li className="mb-4 ml-10 font-bold">
          następstw nieszczęśliwych wypadków
        </li>
        <li className="mb-4 ml-10 font-bold">błędów medycznych </li>
        <li className="mb-12 ml-10 font-bold">
          zwrotu opłat likwidacyjnych (polisolokaty)
        </li>
      </ul>
      <Divider id="kredyty-frankowe" />
    </motion.div>
  );
};
