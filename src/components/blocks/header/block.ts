import { defineBlock, fields } from "@cmssy/react";
import Header from "./Header";

export const headerProps = {
  logo: fields.media({ label: "Logo" }),
  brand: fields.text({ label: "Marka" }),
  email: fields.text({ label: "E-mail" }),
  links: fields.repeater({
    label: "Linki nawigacji",
    itemLabel: "{label}",
    addButtonLabel: "Dodaj link",
    itemSchema: {
      label: fields.text({ label: "Etykieta" }),
      href: fields.link({ label: "Link" }),
    },
  }),
  phones: fields.repeater({
    label: "Telefony",
    itemLabel: "{number}",
    addButtonLabel: "Dodaj telefon",
    itemSchema: { number: fields.text({ label: "Numer" }) },
  }),
};

export const headerBlock = defineBlock({
  type: "header",
  label: "Header",
  component: Header,
  layoutRegions: ["header"],
  props: headerProps,
});
