import "styles/globals.css";
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
