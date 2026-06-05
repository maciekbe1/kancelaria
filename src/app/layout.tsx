import type { Metadata } from "next";
import {
  fetchLayouts,
  CmssyServerLayout,
  type CmssyLayoutGroup,
} from "@cmssy/react";
import { isCmssyEditMode } from "@cmssy/next";
import "./globals.css";
import { blocks } from "@/cmssy/blocks";
import { cmssy } from "@/cmssy/config";

export const metadata: Metadata = {
  title: "Kancelaria Restrukturyzacje i Upadłości",
};

async function getLayoutGroups(): Promise<CmssyLayoutGroup[]> {
  const editMode = await isCmssyEditMode();
  try {
    return await fetchLayouts(
      { apiUrl: cmssy.apiUrl, workspaceSlug: cmssy.workspaceSlug },
      "/",
      { previewSecret: editMode ? cmssy.draftSecret : undefined }
    );
  } catch {
    return [];
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const groups = await getLayoutGroups();
  const locale = cmssy.defaultLocale;
  const slot = (position: "header" | "footer") => (
    <CmssyServerLayout
      groups={groups}
      blocks={blocks}
      position={position}
      locale={locale}
      defaultLocale={locale}
    />
  );
  return (
    <html lang="pl">
      <body>
        {slot("header")}
        {children}
        {slot("footer")}
      </body>
    </html>
  );
}
