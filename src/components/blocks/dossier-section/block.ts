import { defineBlock, fields } from "@cmssy/react";
import DossierSection from "./DossierSection";

export const dossierSectionBlock = defineBlock({
  type: "dossier-section",
  label: "Dossier Section",
  component: DossierSection,
  props: {
    number: fields.singleLine({ label: "Numer" }),
    label: fields.singleLine({ label: "Etykieta" }),
    heading: fields.singleLine({ label: "Nagłówek" }),
    body: fields.richText({ label: "Treść" }),
    anchorId: fields.singleLine({ label: "ID kotwicy" }),
    tint: fields.boolean({ label: "Tło tonowane" }),
  },
});

export interface BlockContent {
  number?: string;
  label?: string;
  heading?: string;
  body?: string;
  anchorId?: string;
  tint?: boolean;
}
