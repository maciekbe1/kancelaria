import { defineBlock, fields } from "@cmssy/react";
import PaperCallout from "./PaperCallout";

export const paperCalloutBlock = defineBlock({
  type: "paper-callout",
  label: "Paper Callout",
  component: PaperCallout,
  props: {
    salutation: fields.text({ label: "Powitanie" }),
    body: fields.richText({ label: "Treść" }),
    close: fields.text({ label: "Zakończenie" }),
    signTag: fields.text({ label: "Podpis - etykieta" }),
    signName: fields.text({ label: "Podpis - nazwa" }),
  },
});

export interface BlockContent {
  salutation?: string;
  body?: string;
  close?: string;
  signTag?: string;
  signName?: string;
}
