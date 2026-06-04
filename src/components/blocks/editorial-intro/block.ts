import { defineBlock, fields } from "@cmssy/react";
import EditorialIntro from "./EditorialIntro";

export const editorialIntroBlock = defineBlock({
  type: "editorial-intro",
  label: "Editorial Intro",
  component: EditorialIntro,
  props: {
    kicker: fields.singleLine({ label: "Nadtytuł" }),
    heading: fields.singleLine({ label: "Nagłówek" }),
    body: fields.richText({ label: "Treść" }),
    image: fields.media({ label: "Obraz" }),
    ctaLabel: fields.singleLine({ label: "Tekst przycisku" }),
    ctaHref: fields.link({ label: "Link przycisku" }),
  },
});

export interface BlockContent {
  kicker?: string;
  heading?: string;
  body?: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
}
