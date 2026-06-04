import { defineBlock, fields } from "@cmssy/react";
import PaperCallout from "./PaperCallout";

export const paperCalloutBlock = defineBlock({
  type: "paper-callout",
  label: "Paper Callout",
  component: PaperCallout,
  props: {
    salutation: fields.singleLine({ label: "Powitanie" }),
    body: fields.richText({ label: "Treść" }),
    close: fields.singleLine({ label: "Zakończenie" }),
    signTag: fields.singleLine({ label: "Podpis - etykieta" }),
    signName: fields.singleLine({ label: "Podpis - nazwa" }),
  },
});

export interface BlockContent {
  salutation?: string;
  body?: string;
  close?: string;
  signTag?: string;
  signName?: string;
}
