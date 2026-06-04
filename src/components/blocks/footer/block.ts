import { defineBlock, fields } from "@cmssy/react";
import Footer from "./Footer";

export const footerBlock = defineBlock({
  type: "footer",
  label: "Footer",
  component: Footer,
  layoutPositions: ["footer"],
  props: {
    brand: fields.singleLine({ label: "Marka" }),
    tagline: fields.singleLine({ label: "Hasło" }),
    email: fields.singleLine({ label: "E-mail" }),
    address: fields.multiLine({ label: "Adres" }),
    addressNote: fields.singleLine({ label: "Uwaga do adresu" }),
    mapsHref: fields.link({ label: "Link do map" }),
    copyright: fields.singleLine({ label: "Copyright" }),
    phones: fields.repeater({
      label: "Telefony",
      itemLabel: "{number}",
      addButtonLabel: "Dodaj telefon",
      itemSchema: { number: fields.singleLine({ label: "Numer" }) },
    }),
    infoLinks: fields.repeater({
      label: "Linki informacyjne",
      itemLabel: "{label}",
      addButtonLabel: "Dodaj link",
      itemSchema: {
        label: fields.singleLine({ label: "Etykieta" }),
        href: fields.link({ label: "Link" }),
      },
    }),
  },
});

export interface BlockContent {
  brand?: string;
  tagline?: string;
  phones?: Array<{
    number: string;
  }>;
  email?: string;
  address?: string;
  addressNote?: string;
  mapsHref?: string;
  infoLinks?: Array<{
    label: string;
    href: string;
  }>;
  copyright?: string;
}
