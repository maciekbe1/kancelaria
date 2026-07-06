import { defineBlock, fields } from "@cmssy/react";
import ContactCta from "./ContactCta";

export const contactCtaBlock = defineBlock({
  type: "contact-cta",
  label: "Contact CTA",
  component: ContactCta,
  props: {
    variant: fields.select({ label: "Wariant", options: ["dark", "gold"] }),
    eyebrow: fields.text({ label: "Nadtytuł" }),
    heading: fields.text({ label: "Nagłówek" }),
    subtext: fields.textarea({ label: "Tekst" }),
    primaryLabel: fields.text({ label: "Przycisk główny - tekst" }),
    primaryHref: fields.link({ label: "Przycisk główny - link" }),
    secondaryLabel: fields.text({ label: "Przycisk drugi - tekst" }),
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
