import { defineBlock, fields } from "@cmssy/react";
import Header from "./Header";

export const headerBlock = defineBlock({
  type: "header",
  label: "Header",
  component: Header,
  layoutPositions: ["header"],
  props: {
    logo: fields.media({ label: "Logo" }),
    brand: fields.singleLine({ label: "Marka" }),
    email: fields.singleLine({ label: "E-mail" }),
    links: fields.repeater({
      label: "Linki nawigacji",
      itemLabel: "{label}",
      addButtonLabel: "Dodaj link",
      itemSchema: {
        label: fields.singleLine({ label: "Etykieta" }),
        href: fields.link({ label: "Link" }),
      },
    }),
    phones: fields.repeater({
      label: "Telefony",
      itemLabel: "{number}",
      addButtonLabel: "Dodaj telefon",
      itemSchema: { number: fields.singleLine({ label: "Numer" }) },
    }),
  },
});

export interface BlockContent {
  brand?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  phones?: Array<{
    number: string;
  }>;
  email?: string;
}
