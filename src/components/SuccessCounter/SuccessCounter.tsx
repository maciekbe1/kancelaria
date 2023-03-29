import CountUp from "react-countup";
import { success } from "./constant";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const SuccessCounter = () => {
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
      className="my-6 lg:my-24"
    >
      <h2 className="mb-16 font-serif text-5xl text-center">Nasze Sukcesy</h2>
      <div className="flex flex-wrap justify-center lg:justify-between">
        {success.map((success) => {
          return (
            <div className="flex flex-col items-center w-full mb-8 sm:w-1/2 md:w-1/3 lg:w-1/4 md:mb-0">
              <div className="relative w-fit">
                <CountUp
                  enableScrollSpy={true}
                  suffix={success.suffix}
                  end={success.number}
                  duration={10}
                  scrollSpyOnce={true}
                  className="font-serif text-6xl"
                />
                <div className="bg-gradient-to-l from-gold absolute w-[calc(100%_+_10px)] h-10 rounded-md top-6 -z-10 "></div>
              </div>
              <p className="mt-6 text-lg font-bold text-center text-slate-600">
                {success.title}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
