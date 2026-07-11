import { defineBlock, fields } from "@cmssy/react";
import DossierSection from "./DossierSection";

export const dossierSectionBlock = defineBlock({
  type: "dossier-section",
  label: "Dossier Section",
  component: DossierSection,
  props: {
    number: fields.text({ label: "Numer" }),
    label: fields.text({ label: "Etykieta" }),
    heading: fields.text({ label: "Nagłówek" }),
    body: fields.richText({ label: "Treść" }),
    anchorId: fields.text({ label: "ID kotwicy" }),
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
