import { Container } from "components";
import { motion } from "framer-motion";
import { LogoIcon } from "icons/LogoIcon";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const Specializations = () => {
  return (
    <>
      <div className="w-full h-[400px] lg:h-[540px] flex justify-center items-center overflow-hidden relative bg-black -mt-[86px]">
        <Image
          alt="hero"
          src="/images/specializations.jpg"
          fill
          className="object-cover"
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
            Specjalizacje
          </motion.h1>
        </Container>
      </div>
      <Container>
        <h2 className="my-8 font-serif text-3xl text-center lg:text-5xl">
          <Balancer>
            POSTĘPOWANIA RESTRUKTURYZACYJNE I UPADŁOŚCIOWE - TO NASZA GŁÓWNA
            SPECJALIZACJA
          </Balancer>
        </h2>
        <div className="flex justify-center">
          <LogoIcon size={96} />
        </div>
        <h3 className="mt-12 mb-12 font-serif text-xl text-center lg:text-3xl">
          POSTĘPOWANIA RESTRUKTURYZACYJNE
        </h3>
        <p className="mb-8">
          Świadczymy kompleksową pomoc prawną w postępowaniach
          restrukturyzacyjnych.
        </p>
        <p className="mb-8">
          Pomagamy wybrać odpowiedni rodzaj postępowania i reprezentujemy
          przedsiębiorców -w tym rolników prowadzących gospodarstwa rolne, w
          postępowaniach restrukturyzacyjnych dążąc do osiągnięcia celu tych
          postępowań jakim jest{" "}
          <span className="font-bold">zawarcie układu z wierzycielami.</span>
        </p>
        <p className="mb-8 font-bold">
          Dzięki doświadczeniu i indywidualnemu podejściu do każdej sprawy,
          doprowadziliśmy do zawarcia wielu układów w postępowaniach
          restrukturyzacyjnych.{" "}
        </p>
        <p className="mb-8 font-bold underline">
          Czym jest postępowanie restrukturyzacyjne?{" "}
        </p>
        <p className="mb-8">
          Postępowanie restrukturyzacyjne to postępowanie mające na celu
          uniknięcie ogłoszenia upadłości dłużnika niewypłacalnego lub
          zagrożonego niewypłacalnością poprzez zawarcie układu z wierzycielami.
          Celem postępowania jest przywrócenie płynności finansowej
          przedsiębiorstwa i przywrócenie mu zdolności do regulowania zobowiązań
          pieniężnych. By to osiągnąć, przepisy prawa restrukturyzacyjnego dają
          przedsiębiorcy odpowiednie narzędzia,{" "}
          <span className="font-bold">
            przede wszystkim po otwarciu postępowania restrukturyzacyjnego:
          </span>
        </p>
        <ul className="list-disc">
          <li className="mb-4 ml-10">
            obowiązuje zakaz prowadzenia egzekucji z majątku dłużnika
          </li>
          <li className="mb-4 ml-10">
            obowiązuje zakaz wypowiadania umów kredytów/pożyczek oraz innych
            umów o podstawowym znaczeniu dla prowadzenia działalności
            gospodarczej dłużnika w przypadkach określonych w ustawie{" "}
          </li>
          <li className="mb-4 ml-10">
            obowiązuje zakaz spłacania przez dłużnika zobowiązań objętych
            układem w przyspieszonym postępowaniu układowym oraz postępowaniu
            sanacyjnym
          </li>
        </ul>
        <p className="mb-4">
          Po otwarciu postępowania restrukturyzacyjnego przedsiębiorca
          borykający się z problemami finansowymi dzięki narzędziom mającym na
          celu ochronę jego majątku ma czas na wdrożenie środków
          restrukturyzacyjnych czyli wprowadzenie działań mających spowodować
          poprawę jego sytuacji ekonomicznej. Postępowanie restrukturyzacyjne
          prowadzi się w celu zawarcia porozumienia z wierzycielami w formie:
        </p>
        <p className="mb-4 font-bold underline">
          układu z wierzycielami, który polega m.in. na:
        </p>
        <ul className="list-disc">
          <li className="mb-4 ml-10 font-bold">
            obowiązuje zakaz prowadzenia egzekucji z majątku dłużnika
          </li>
          <li className="mb-4 ml-10 font-bold">
            obowiązuje zakaz wypowiadania umów kredytów/pożyczek oraz innych
            umów o podstawowym znaczeniu dla prowadzenia działalności
            gospodarczej dłużnika w przypadkach określonych w ustawie{" "}
          </li>
          <li className="mb-4 ml-10 font-bold">
            obowiązuje zakaz spłacania przez dłużnika zobowiązań objętych
            układem w przyspieszonym postępowaniu układowym oraz postępowaniu
            sanacyjnym
          </li>
        </ul>
        <div className="p-6 mb-12 rounded-sm shadow-2xl">
          <p className="text-xl italic">Przedsiębiorco,</p>
          <br />
          <p className="text-lg italic">
            obecne czasy są niezwykle trudne. Jeśli mierzysz się z problemami
            finansowymi, przez które w najbliższym czasie możesz utracić
            zdolność do regulowania zobowiązań pieniężnych warto wdrożyć proces
            restrukturyzacji.
          </p>
          <br />
          <p className="text-lg italic">
            Jako profesjonalni pełnomocnicy, jesteśmy w stanie pomóc Ci otworzyć
            postępowanie i przeprowadzić cały proces restrukturyzacji, abyś mógł
            skupić się jedynie na prowadzeniu swojej działalności.
          </p>
          <br />
          <p className="text-lg italic font-bold text-center ">
            Resztą zajmiemy się my.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Specializations;
