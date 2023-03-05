import { Container } from "components";
import Image from "next/image";
import Link from "next/link";
import { links } from "./constants";

export const Hero = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center overflow-hidden relative bg-black -mt-14">
      <Image
        alt="hero"
        src="/images/hero.jpg"
        sizes="(max-width: 768px) 100vw, 50vw"
        fill
        className="object-cover opacity-60"
      />
      <Container>
        <div className="w-full gap-1 text-white md:grid md:grid-cols-2">
          <h1 className="py-4 font-serif font-bold text-center uppercase text-header-sm md:text-header-md xl:text-header-xl drop-shadow-lg">
            <span className="py-1 text-gold">Kancelarie</span> radców prawnych
          </h1>
          <div className="justify-end hidden drop-shadow-lg md:flex">
            <div className="flex flex-col justify-center">
              {links.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link.href}
                    role="button"
                    className="mb-2 xl:mb-3 btn btn-wide btn-sm xl:btn-md hover:text-gold last:mb-0"
                  >
                    {link.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
