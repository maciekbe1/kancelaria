import { Container } from "components";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { links } from "./constants";

export const Hero = () => {
  return (
    <div className="relative flex items-center justify-center w-full overflow-hidden h-[600px] lg:h-[740px]">
      <Image
        alt="hero"
        src="/images/home.webp"
        fill
        className="object-cover"
        priority
        quality={100}
      />
      <Container className="xs:px-0">
        <div className="w-full gap-4 text-white md:grid md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 55 }}
            transition={{ delay: 0.55, duration: 1 }}
            className="relative h-max md:col-span-2"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-700/90  via-slate-700/60 to-transparent rounded-sm" />
            <div className="relative z-10 px-4 py-6 uppercase md:px-8 lg:px-10 font-domine">
              <h1 className="font-bold leading-tight break-words fluid-title">
                Kancelaria{" "}
                <span className="text-gold">Restrukturyzacje i Upadłości</span>
              </h1>
              <p className="mt-3 normal-case lg:text-left fluid-sub">
                Radcy prawni i licencjonowani doradcy restrukturyzacyjni
              </p>
              <p className="mt-1 normal-case lg:text-left fluid-sub-sm">
                – twoi doradcy w kryzysie
              </p>
            </div>
          </motion.div>

          <div className="hidden md:flex md:col-span-1 drop-shadow-lg justify-end">
            <div className="flex flex-col justify-center">
              <AnimatePresence>
                {links.map((link, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: index++ }}
                      className="mb-2 md:mb-3 last:mb-0"
                    >
                      <Link
                        aria-label={`Przeczytaj więcej o ${link.text}`}
                        href={`/specjalizacje#${link.id}`}
                        role="button"
                        className="btn btn-wide btn-sm md:btn-md hover:text-gold"
                      >
                        {link.text}
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .fluid-title {
          font-size: clamp(2.5rem, 2.5rem + 2.5vw, 4rem);
        }
        .fluid-sub {
          font-size: clamp(1.125rem, 0.9rem + 0.6vw, 1.5rem);
        }
        .fluid-sub-sm {
          font-size: clamp(1rem, 0.85rem + 0.5vw, 1.25rem);
        }
        @supports (hyphens: auto) {
          .fluid-title {
            hyphens: auto;
          }
        }
        .fluid-title {
          overflow-wrap: anywhere;
        }
      `}</style>
    </div>
  );
};
