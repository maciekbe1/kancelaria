import Head from "next/head";
import { useRouter } from "next/router";
import { structuredJSON } from "./constants";
import { getPageTitle } from "./getPageTitle";

export const Meta = () => {
  const { pathname } = useRouter();
  const currentUrl = `https://kancelaria-restrukturyzacje.pl${pathname}`;
  return (
    <Head>
      <title>Kancelaria Restrukturyzacje - {getPageTitle(pathname)}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
      <link rel="canonical" href={currentUrl} />
      <meta
        name="description"
        content="Świadczymy kompleksową pomoc prawną w postępowaniach restrukturyzacyjnych i upadłościowych."
      />
      <meta
        name="keywords"
        content="restrukturyzacja, restrukturyzacje, upadłość, kancelaria restrukturyzacyjna, oddłużanie, antywindykacja, radca prawny, gdańsk, trójmiasto, pomoc prawna, Wiktoria Danowska"
      />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Kancelaria Restrukturyzacje" />
      <meta
        property="og:description"
        content="Świadczymy kompleksową pomoc prawną w postępowaniach restrukturyzacyjnych i upadłościowych."
      />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Kancelaria Restrukturyzacje" />
      <meta
        property="og:image"
        content="https://kancelaria-restrukturyzacje.pl/images/Wiktoria-Danowska.webp"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="800" />
      <meta property="og:image:alt" content="Kancelaria Restrukturyzacje" />
      <meta property="og:image:type" content="image/jpeg" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredJSON) }}
      />
    </Head>
  );
};
