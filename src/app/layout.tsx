import type { Metadata } from "next";
import "./globals.css";
import "@/cmssy/blocks";
import { RegisterBlocks } from "@/cmssy/register-blocks";
import Header from "@/components/blocks/header/Header";
import Footer from "@/components/blocks/footer/Footer";
import { footerContent, headerContent } from "@/cmssy/layout-content";

export const metadata: Metadata = {
  title: "Kancelaria Restrukturyzacje i Upadłości",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <RegisterBlocks />
        <Header content={headerContent} />
        {children}
        <Footer content={footerContent} />
      </body>
    </html>
  );
}
