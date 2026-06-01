import type { Metadata } from "next";
import "./globals.css";
import "@/cmssy/blocks";
import { RegisterBlocks } from "@/cmssy/register-blocks";

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
        {children}
      </body>
    </html>
  );
}
