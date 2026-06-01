import { fields, registerComponent } from "@cmssy/react";
import { EditorialIntro } from "@/components/blocks/editorial-intro";
import { Hero } from "@/components/blocks/hero";
import { Features } from "@/components/blocks/features";
import { Pricing } from "@/components/blocks/pricing";
import { Faq } from "@/components/blocks/faq";
import { Cta } from "@/components/blocks/cta";

registerComponent(Features, {
  type: "features",
  label: "Features",
  category: "marketing",
  props: {
    heading: fields.singleLine({ label: "Heading" }),
    headingHighlight: fields.singleLine({ label: "Heading highlight" }),
    description: fields.multiLine({ label: "Description" }),
  },
});

registerComponent(Pricing, {
  type: "pricing",
  label: "Pricing",
  category: "marketing",
  props: {
    heading: fields.singleLine({ label: "Heading" }),
    headingHighlight: fields.singleLine({ label: "Heading highlight" }),
    description: fields.multiLine({ label: "Description" }),
    trialNotice: fields.singleLine({ label: "Trial notice" }),
  },
});

registerComponent(Faq, {
  type: "faq",
  label: "FAQ",
  category: "marketing",
  props: {
    heading: fields.singleLine({ label: "Heading" }),
    headingHighlight: fields.singleLine({ label: "Heading highlight" }),
    description: fields.multiLine({ label: "Description" }),
  },
});

registerComponent(Cta, {
  type: "cta",
  label: "CTA",
  category: "marketing",
  props: {
    badgeText: fields.singleLine({ label: "Badge text" }),
    heading: fields.singleLine({ label: "Heading" }),
    headingLine2: fields.singleLine({ label: "Heading line 2" }),
    description: fields.multiLine({ label: "Description" }),
    primaryButtonText: fields.singleLine({ label: "Primary button text" }),
    primaryButtonUrl: fields.link({ label: "Primary button URL" }),
    secondaryButtonText: fields.singleLine({ label: "Secondary button text" }),
    secondaryButtonUrl: fields.link({ label: "Secondary button URL" }),
  },
});

registerComponent(Hero, {
  type: "hero",
  label: "Hero Section",
  category: "marketing",
  props: {
    heading: fields.singleLine({ label: "Heading", defaultValue: "Welcome" }),
    subheading: fields.singleLine({ label: "Subheading" }),
    showCta: fields.boolean({ label: "Show CTA", defaultValue: true }),
    ctaText: fields.singleLine({
      label: "CTA Text",
      defaultValue: "Get Started",
    }),
    ctaUrl: fields.link({ label: "CTA URL", defaultValue: "#" }),
  },
});

registerComponent(EditorialIntro, {
  type: "editorial-intro",
  label: "Editorial Intro",
  category: "marketing",
  props: {
    kicker: fields.singleLine({
      label: "Kicker (etykieta sekcji)",
      defaultValue: "Nasze usługi",
    }),
    heading: fields.singleLine({
      label: "Nagłówek",
      defaultValue: "Kompleksowa pomoc prawna w kryzysie",
    }),
    body: fields.richText({
      label: "Treść",
      defaultValue:
        "<p>Świadczymy kompleksową pomoc prawną w postępowaniach restrukturyzacyjnych i upadłościowych.</p>",
    }),
    image: fields.media({
      label: "Zdjęcie",
      defaultValue: "/images/services.webp",
    }),
    ctaLabel: fields.singleLine({
      label: "Etykieta CTA",
      defaultValue: "Zobacz wszystkie specjalizacje",
    }),
    ctaHref: fields.link({
      label: "Adres CTA",
      defaultValue: "/specjalizacje",
    }),
  },
});
