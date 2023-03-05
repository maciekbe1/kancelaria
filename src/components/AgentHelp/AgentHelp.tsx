import Image from "next/image";
import React from "react";

export const AgentHelp = () => {
  return (
    <div className="flex flex-col-reverse my-6 md:my-24 md:gap-1 md:grid-cols-2 md:grid">
      <div>
        <Image
          alt="biuro"
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 90vw, (max-width: 1920px) 50vw, 880px"
          src="/images/office.jpg"
          width={400}
          height={494}
        />
      </div>
      <div className="mb-6 md:mb-0">
        <h2 className="mb-6 font-serif text-4xl">
          Kompleksowe doradztwo prawne
        </h2>
        <p className="font-light">
          Kompleksowa pomoc prawna to niezwykle istotny element w dzisiejszych
          czasach, w których zawiłości prawa są niezwykle skomplikowane. W
          naszej kancelarii adwokackiej, zlokalizowanej w Trójmieście, jesteśmy
          przekonani, że odpowiednio dobrany zespół prawników i radców prawnych
          to klucz do osiągnięcia sukcesu w prowadzeniu spraw.
        </p>
        <br />
        <p className="font-light">
          Nasza kancelaria składa się z doświadczonych radców prawnych, którzy
          są specjalistami w swoich dziedzinach. Wspólnie tworzymy zespół, który
          jest w stanie sprostać nawet najtrudniejszym wyzwaniom. Cechą
          charakterystyczną naszych prawników jest ich zaangażowanie w
          prowadzone sprawy oraz wysoka kultura osobista.
        </p>

        <br />
        <p className="font-light">
          Każdy nasz klient może liczyć na indywidualne podejście do swojej
          sprawy oraz kompleksową pomoc prawna, która jest dostosowana do jego
          potrzeb.
        </p>
        <br />

        <p className="font-light">
          Zapraszamy do kontaktu z naszą kancelarią, jeśli szukasz kompleksowej
          pomocy prawnej. Nasz zespół z przyjemnością odpowie na Twoje pytania i
          pomoże w rozwiązaniu Twoich problemów prawnych.
        </p>
      </div>
    </div>
  );
};
