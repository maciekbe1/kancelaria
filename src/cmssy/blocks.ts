import type { ComponentType } from "react";
import { fields, registerComponent } from "@cmssy/react";
import Hero from "@/components/blocks/hero/Hero";
import Features from "@/components/blocks/features/Features";
import Pricing from "@/components/blocks/pricing/Pricing";
import Faq from "@/components/blocks/faq/Faq";
import Cta from "@/components/blocks/cta/Cta";

type BlockComponent = ComponentType<{ content: Record<string, unknown> }>;
const asBlock = (c: unknown) => c as unknown as BlockComponent;

registerComponent(asBlock(Hero), {
  type: "hero",
  label: "Hero Section",
  category: "marketing",
  props: {
    badgeText: fields.singleLine({ label: "Badge text" }),
    heading: fields.singleLine({ label: "Heading" }),
    headingHighlight: fields.singleLine({ label: "Heading highlight" }),
    subheading: fields.multiLine({ label: "Subheading" }),
    primaryButtonText: fields.singleLine({ label: "Primary button text" }),
    primaryButtonUrl: fields.link({ label: "Primary button URL" }),
    secondaryButtonText: fields.singleLine({ label: "Secondary button text" }),
    secondaryButtonUrl: fields.link({ label: "Secondary button URL" }),
    media: fields.media({ label: "Media" }),
  },
});

registerComponent(asBlock(Features), {
  type: "features",
  label: "Features",
  category: "marketing",
  props: {
    heading: fields.singleLine({ label: "Heading" }),
    headingHighlight: fields.singleLine({ label: "Heading highlight" }),
    description: fields.multiLine({ label: "Description" }),
  },
});

registerComponent(asBlock(Pricing), {
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

registerComponent(asBlock(Faq), {
  type: "faq",
  label: "FAQ",
  category: "marketing",
  props: {
    heading: fields.singleLine({ label: "Heading" }),
    headingHighlight: fields.singleLine({ label: "Heading highlight" }),
    description: fields.multiLine({ label: "Description" }),
  },
});

registerComponent(asBlock(Cta), {
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
