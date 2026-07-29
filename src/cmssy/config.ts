import { defineCmssyConfig } from "@cmssy/next";

const editorOrigin = process.env.CMSSY_EDITOR_ORIGIN?.split(",")
  .map((origin) => origin.trim())
  .filter((origin) => origin.length > 0);

export const cmssy = defineCmssyConfig({
  apiUrl: process.env.CMSSY_API_URL,
  org: process.env.CMSSY_ORG_SLUG,
  workspaceSlug: process.env.CMSSY_WORKSPACE_SLUG,
  draftSecret: process.env.CMSSY_DRAFT_SECRET,
  editorOrigin,
  defaultLocale: "pl",
  auth: {
    modelSlug: process.env.CMSSY_AUTH_MODEL_SLUG ?? "",
    sessionSecret: process.env.CMSSY_SESSION_SECRET ?? "",
  },
});
