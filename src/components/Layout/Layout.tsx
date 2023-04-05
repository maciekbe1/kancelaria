import clsx from "clsx";
import { Footer, Header } from "components";
import useHeaderState from "hooks/useHeaderState";
import Head from "next/head";
import { structuredJSON } from "./constants";

type LayoutProps = {
  children: Array<React.ReactElement> | React.ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  const { isViewportScrolled, isMobile } = useHeaderState();

  return (
    <>
      <Head>
        <title>Kancelaria Restrukturyzacje</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="canonical" href="https://kancelaria-restrukturyzacje.pl/" />
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
        <meta
          property="og:url"
          content="https://kancelaria-restrukturyzacje.pl/"
        />
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
      <Header />
      <main
        className={clsx(
          "transition-all ease-in-out delay-150",
          isViewportScrolled || isMobile ? "-mt-[64px]" : "-mt-[86px]"
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
