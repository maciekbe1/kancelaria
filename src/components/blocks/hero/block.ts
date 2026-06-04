import { defineBlock, fields } from "@cmssy/react";
import Hero from "./Hero";

export const heroBlock = defineBlock({
  type: "hero",
  label: "Hero",
  component: Hero,
  props: {
    eyebrow: fields.singleLine({ label: "Nadtytuł" }),
    title: fields.singleLine({ label: "Tytuł" }),
    subtitle: fields.singleLine({ label: "Podtytuł" }),
    backgroundImage: fields.media({ label: "Tło" }),
    indexLabel: fields.singleLine({ label: "Etykieta listy" }),
    index: fields.repeater({
      label: "Specjalizacje",
      itemLabel: "{label}",
      addButtonLabel: "Dodaj specjalizację",
      helperText:
        "Link może wskazywać sekcję innej strony, np. /uslugi#restrukturyzacja",
      itemSchema: {
        number: fields.singleLine({ label: "Numer" }),
        label: fields.singleLine({ label: "Nazwa" }),
        href: fields.link({ label: "Link (np. /uslugi#sekcja)" }),
      },
    }),
  },
});

export interface BlockContent {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  indexLabel?: string;
  index?: Array<{
    number: string;
    label: string;
    href?: string;
  }>;
}
