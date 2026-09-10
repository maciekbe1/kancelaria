import type { Metadata } from "next";
import { resolveCmssyLayout } from "@cmssy/react";
import { isCmssyEditMode } from "@cmssy/next/server";
import "./globals.css";
import { blocks } from "@/cmssy/blocks";
import { cmssy } from "@/cmssy/config";
import { EditableLayout } from "@/cmssy/editable-layout";

export const metadata: Metadata = {
  title: "Kancelaria Restrukturyzacje i Upadłości",
};

async function slot(region: "header" | "footer", editMode: boolean) {
  try {
    const { element } = await resolveCmssyLayout(cmssy, {
      region,
      blocks,
      editMode,
      path: [],
      editable: EditableLayout,
    });
    return element;
  } catch {
    return null;
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const editMode = await isCmssyEditMode();
  const [header, footer] = await Promise.all([
    slot("header", editMode),
    slot("footer", editMode),
  ]);

  return (
    <html lang="pl">
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
