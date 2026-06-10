import type { CmssyNextConfig } from "@cmssy/next";

export const cmssy: CmssyNextConfig = {
  apiUrl: process.env.CMSSY_API_URL ?? "",
  workspaceSlug: process.env.CMSSY_WORKSPACE_SLUG ?? "",
  draftSecret: process.env.CMSSY_DRAFT_SECRET ?? "",
  editorOrigin: process.env.CMSSY_EDITOR_ORIGIN ?? "",
  defaultLocale: "pl",
  auth: {
    modelSlug: process.env.CMSSY_AUTH_MODEL_SLUG ?? "",
    sessionSecret: process.env.CMSSY_SESSION_SECRET ?? "",
  },
};
