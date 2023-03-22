import { Container } from "components";
import Image from "next/image";
import Link from "next/link";
import { links } from "./constants";
import { AnimatePresence, motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="w-full h-[600px] lg:h-[740px] flex justify-center items-center overflow-hidden relative bg-black -mt-[86px]">
      <Image
        alt="hero"
        src="/images/hero.jpg"
        fill
        className="object-cover"
        priority
        quality={100}
      />
      <Container>
        <div className="w-full gap-1 text-white md:grid md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 55 }}
              transition={{ delay: 0.55, duration: 1 }}
              className="py-4 font-domine font-bold text-center uppercase text-header-md lg:text-header-xl drop-shadow-lg bg-slate-600-500/[.7] hero-text bg-gradient-to-l from-slate-700"
            >
              <span className="py-1 text-gold">Kancelarie</span> radców prawnych
            </motion.h1>
          </div>

          <div className="justify-end hidden drop-shadow-lg md:flex">
            <ul className="flex flex-col justify-center">
              <AnimatePresence>
                {links.map((link, index) => {
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: index++ }}
                      className="mb-2 md:mb-3 last:mb-0"
                    >
                      <Link
                        href={link.href}
                        role="button"
                        className="btn btn-wide btn-sm md:btn-md hover:text-gold"
                      >
                        {link.text}
                      </Link>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
