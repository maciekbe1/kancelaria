import { defineBlock, fields } from "@cmssy/react";
import Hero from "./Hero";

export const heroProps = {
  eyebrow: fields.text({ label: "Nadtytuł" }),
  title: fields.text({ label: "Tytuł" }),
  subtitle: fields.text({ label: "Podtytuł" }),
  backgroundImage: fields.media({ label: "Tło" }),
  indexLabel: fields.text({ label: "Etykieta listy" }),
  index: fields.repeater({
    label: "Specjalizacje",
    itemLabel: "{label}",
    addButtonLabel: "Dodaj specjalizację",
    helperText:
      "Link może wskazywać sekcję innej strony, np. /uslugi#restrukturyzacja",
    itemSchema: {
      number: fields.text({ label: "Numer" }),
      label: fields.text({ label: "Nazwa" }),
      href: fields.link({ label: "Link (np. /uslugi#sekcja)" }),
    },
  }),
};

export const heroBlock = defineBlock({
  type: "hero",
  label: "Hero",
  component: Hero,
  props: heroProps,
});
