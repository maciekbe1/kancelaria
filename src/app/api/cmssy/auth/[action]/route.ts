import { createCmssyAuthRoute } from "@cmssy/next";
import { cmssy } from "@/cmssy/config";

export const { POST, GET } = createCmssyAuthRoute(cmssy);
