import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const Paper = () => {
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
      className="p-6 rounded-sm shadow-2xl"
    >
      <p className="text-xl italic">Przedsiębiorco,</p>
      <br />
      <p className="text-lg italic">
        obecne czasy są niezwykle trudne. Jeśli mierzysz się z problemami
        finansowymi, przez które w najbliższym czasie możesz utracić zdolność do
        regulowania zobowiązań pieniężnych warto wdrożyć proces
        restrukturyzacji.
      </p>
      <br />
      <p className="text-lg italic">
        Jako licencjonowani doradcy restrukturyzacyjni przy współpracy ze
        specjalistami z różnych dziedzin, jesteśmy w stanie pomóc Ci otworzyć
        postępowanie i przeprowadzić cały proces restrukturyzacji, abyś mógł
        skupić się jedynie na prowadzeniu swojej działalności.
      </p>
      <br />
      <p className="text-lg italic font-bold text-center ">
        Resztą zajmiemy się my.
      </p>
    </motion.div>
  );
};
