import { defineBlock, fields } from "@cmssy/react";
import ContactCta from "./ContactCta";

export const contactCtaBlock = defineBlock({
  type: "contact-cta",
  label: "Contact CTA",
  component: ContactCta,
  props: {
    variant: fields.select({ label: "Wariant", options: ["dark", "gold"] }),
    eyebrow: fields.singleLine({ label: "Nadtytuł" }),
    heading: fields.singleLine({ label: "Nagłówek" }),
    subtext: fields.multiLine({ label: "Tekst" }),
    primaryLabel: fields.singleLine({ label: "Przycisk główny - tekst" }),
    primaryHref: fields.link({ label: "Przycisk główny - link" }),
    secondaryLabel: fields.singleLine({ label: "Przycisk drugi - tekst" }),
    secondaryHref: fields.link({ label: "Przycisk drugi - link" }),
  },
});

export interface BlockContent {
  variant?: "dark" | "gold";
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}
