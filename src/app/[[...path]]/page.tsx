import dynamic from "next/dynamic";
import { createCmssyPage } from "@cmssy/next";
import { cmssy } from "@/cmssy/config";
import { blocks } from "@/cmssy/blocks";

const CmssyEditor = dynamic(() =>
  import("@/cmssy/editor").then((m) => m.CmssyEditor)
);

export default createCmssyPage(cmssy, blocks, { editor: CmssyEditor });
