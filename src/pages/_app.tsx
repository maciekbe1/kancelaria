import "styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Layout, Styles } from "components";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Styles />
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}
