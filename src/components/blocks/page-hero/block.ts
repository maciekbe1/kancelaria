import { defineBlock, fields } from "@cmssy/react";
import PageHero from "./PageHero";

export const pageHeroBlock = defineBlock({
  type: "page-hero",
  label: "Page Hero",
  component: PageHero,
  props: {
    eyebrow: fields.text({ label: "Nadtytuł" }),
    title: fields.text({ label: "Tytuł" }),
    lead: fields.textarea({ label: "Lead" }),
    image: fields.media({ label: "Obraz" }),
  },
});

export interface BlockContent {
  eyebrow?: string;
  title?: string;
  lead?: string;
  image?: string;
}
