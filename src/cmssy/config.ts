import type { CmssyNextConfig } from "@cmssy/next";

export const cmssy: CmssyNextConfig = {
  apiUrl: process.env.CMSSY_API_URL ?? "",
  workspaceSlug: process.env.CMSSY_WORKSPACE_SLUG ?? "",
  draftSecret: process.env.CMSSY_DRAFT_SECRET ?? "",
  editorOrigin: process.env.CMSSY_EDITOR_ORIGIN ?? "",
  defaultLocale: "pl",
};
