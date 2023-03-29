import { Divider } from "components/Divider/Divider";

export const Restrukturyzacje = () => {
  return (
    <div>
      <h3 className="mt-12 mb-12 font-serif text-xl font-bold text-center lg:text-3xl">
        POSTĘPOWANIA RESTRUKTURYZACYJNE
      </h3>
      <p className="mb-8">
        Świadczymy kompleksową pomoc prawną w postępowaniach
        restrukturyzacyjnych.
      </p>
      <p className="mb-8">
        Pomagamy wybrać odpowiedni rodzaj postępowania i reprezentujemy
        przedsiębiorców - w tym rolników prowadzących gospodarstwa rolne, w
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
        uniknięcie ogłoszenia upadłości dłużnika niewypłacalnego lub zagrożonego
        niewypłacalnością poprzez zawarcie układu z wierzycielami. Celem
        postępowania jest przywrócenie płynności finansowej przedsiębiorstwa i
        przywrócenie mu zdolności do regulowania zobowiązań pieniężnych. By to
        osiągnąć, przepisy prawa restrukturyzacyjnego dają przedsiębiorcy
        odpowiednie narzędzia,{" "}
        <span className="font-bold">
          przede wszystkim po otwarciu postępowania restrukturyzacyjnego:
        </span>
      </p>
      <ul className="list-disc">
        <li className="mb-4 ml-10">
          obowiązuje zakaz prowadzenia egzekucji z majątku dłużnika
        </li>
        <li className="mb-4 ml-10">
          obowiązuje zakaz wypowiadania umów kredytów/pożyczek oraz innych umów
          o podstawowym znaczeniu dla prowadzenia działalności gospodarczej
          dłużnika w przypadkach określonych w ustawie{" "}
        </li>
        <li className="mb-4 ml-10">
          obowiązuje zakaz spłacania przez dłużnika zobowiązań objętych układem
          w przyspieszonym postępowaniu układowym oraz postępowaniu sanacyjnym
        </li>
      </ul>
      <p className="mb-4">
        Po otwarciu postępowania restrukturyzacyjnego przedsiębiorca borykający
        się z problemami finansowymi dzięki narzędziom mającym na celu ochronę
        jego majątku ma czas na wdrożenie środków restrukturyzacyjnych czyli
        wprowadzenie działań mających spowodować poprawę jego sytuacji
        ekonomicznej. Postępowanie restrukturyzacyjne prowadzi się w celu
        zawarcia porozumienia z wierzycielami w formie:
      </p>
      <p className="mb-4 font-bold underline">
        układu z wierzycielami, który polega m.in. na:
      </p>
      <ul className="list-disc">
        <li className="mb-4 ml-10 font-bold">
          umorzeniu zobowiązań, np. odsetek, części kapitału
        </li>
        <li className="mb-4 ml-10 font-bold">
          zmianie harmonogramów spłaty zobowiązań- dostosowanie ich do
          możliwości finansowych dłużnika
        </li>
        <li className="mb-12 ml-10 font-bold">karencji w spłacie zobowiązań</li>
      </ul>
      <Divider id="upadlosc" />
    </div>
  );
};
