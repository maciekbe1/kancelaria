import { defineBlock, fields } from "@cmssy/react";
import PageHero from "./PageHero";

export const pageHeroBlock = defineBlock({
  type: "page-hero",
  label: "Page Hero",
  component: PageHero,
  props: {
    eyebrow: fields.singleLine({ label: "Nadtytuł" }),
    title: fields.singleLine({ label: "Tytuł" }),
    lead: fields.multiLine({ label: "Lead" }),
    image: fields.media({ label: "Obraz" }),
  },
});

export interface BlockContent {
  eyebrow?: string;
  title?: string;
  lead?: string;
  image?: string;
}
