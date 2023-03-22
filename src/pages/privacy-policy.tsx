import { Container } from "components";
import { motion } from "framer-motion";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="w-full h-[400px] lg:h-[540px] flex justify-center items-center overflow-hidden relative bg-black -mt-[86px]">
        <Image
          alt="hero"
          src="/images/privacy.jpg"
          fill
          className="object-cover opacity-60"
          priority
          quality={100}
        />
        <Container className="p-0 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 55 }}
            transition={{ delay: 0.55, duration: 1 }}
            className="py-4 font-domine font-bold text-center uppercase text-header-sm lg:text-header-xl drop-shadow-lg bg-slate-600-500/[.7] hero-text bg-gradient-to-l from-slate-700"
          >
            <span className="py-1 text-gold">Polityka</span> prywatności
          </motion.h1>
        </Container>
      </div>
      <Container className="py-10">
        <p className="pb-4">
          Działając na podstawie art. 13 ust. 1 i ust. 2 Rozporządzenia
          Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
          r. (Dz. Urz. UE. L. 119 z 04.05.2016) w sprawie ochrony osób
          fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
          swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE,
          dalej m.in. RODO - informujemy, iż:
        </p>
        <p className="pb-4">Administratorem Państwa danych osobowych są:</p>
        <p className="pb-4">
          Kancelaria Radcy Prawnego Wiktoria Danowska, NIP: 7393736574, 80-298
          Gdańsk, ul. Majora Słabego 12/36 oraz Kancelaria Prawna Łukasz
          Zabłocki, NIP: 5691862579, 80-312 Gdańsk, ul. Wita Stwosza 31/11
        </p>
        <p className="pb-4">
          Kontakt z Administratorem: biuro@kancelaria-restrukturyzacje.pl{" "}
        </p>
        <p className="pb-4">
          Państwa dane osobowe przetwarzane będą w celu nawiązania z Państwem
          kontaktu i informowania, w zakresie realizacji przedmiotu działalności
          Administratora, w tym w szczególności prowadzonej przez niego
          działalności prawniczej.
        </p>
        <p className="pb-4">
          Przetwarzanie Państwa danych osobowych odbywać się będzie na
          podstawie:
        </p>
        <p className="pb-4">
          - art. 6 ust. 1 lit. a RODO - w szczególności w zakresie czynności
          zleconych przez Administratorowi prowadzącemu Kancelarię Radcy
          Prawnego, również w zakresie doradztwa restrukturyzacyjnego albo
        </p>
        <p className="pb-4">
          - art. 6 ust. 1 lit. c RODO - jako niezbędne do wypełnienia obowiązku
          prawnego ciążącego na Administratorze, w tym w szczególności w
          zakresie prowadzonych postępowań sądowych, w tym upadłościowych i
          restrukturyzacyjnych albo
        </p>
        <p className="pb-4">
          - art. 6 ust. 1 lit. f RODO - jako niezbędne do celów wynikających z
          prawnie uzasadnionych interesów realizowanych przez Administratora.
        </p>
        <p className="pb-4">
          Państwa dane osobowe przechowywane będą do czasu realizacji wskazanych
          wyżej celów przetwarzania danych, nie dłużej jednak, niż do czasu
          zakończenia wykonywania obowiązku prawnego ciążącego na
          Administratorze (w tym w zakresie przechowywania akt postępowań/innej
          dokumentacji).
        </p>
        <p className="pb-4">
          W związku z przetwarzaniem danych osobowych przysługuje Państwu: prawo
          dostępu do treści danych osobowych, ich sprostowania, usunięcia,
          przenoszenia lub ograniczenia ich przetwarzania, a także prawo
          wniesienia sprzeciwu wobec ich przetwarzania w przypadku, gdy dane
          przetwarzane są na podstawie art. 6 ust. 1 lit. f RODO.
        </p>
        <p className="pb-4">
          Przysługuje również Państwu prawo do wycofania (w dowolnym momencie)
          wyrażonej zgody, gdy podstawą przetwarzania danych jest art. 6 ust. 1
          lit. a RODO, przy czym cofnięcie zgody nie będzie wpływać na zgodność
          z prawem przetwarzania, którego dokonano na podstawie Państwa zgody
          przed jej wycofaniem.
        </p>
        <p className="pb-4">
          W przypadku przetwarzania przekazanych danych osobowych niezgodnie z
          przepisami RODO przysługuje Państwu prawo wniesienia skargi do organu
          nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych.
        </p>
        <p className="pb-4">
          Podanie danych osobowych jest dobrowolne. Państwa dane osobowe mogą
          być przetwarzane w systemach informatycznych, jednakże Administrator
          nie będzie podejmował decyzji w sposób zautomatyzowany, w tym w formie
          profilowania.
        </p>
      </Container>
    </>
  );
};
export default PrivacyPolicy;
