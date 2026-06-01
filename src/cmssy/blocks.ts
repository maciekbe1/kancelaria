import type { ComponentType } from "react";
import { registerComponent } from "@cmssy/react";
import Hero from "@/components/blocks/hero/Hero";
import EditorialIntro from "@/components/blocks/editorial-intro/EditorialIntro";
import ContactCta from "@/components/blocks/contact-cta/ContactCta";
import DossierSection from "@/components/blocks/dossier-section/DossierSection";
import Footer from "@/components/blocks/footer/Footer";
import Header from "@/components/blocks/header/Header";
import PageHero from "@/components/blocks/page-hero/PageHero";
import PaperCallout from "@/components/blocks/paper-callout/PaperCallout";
import StatsCounter from "@/components/blocks/stats-counter/StatsCounter";
import TeamMember from "@/components/blocks/team-member/TeamMember";
import TeamPreview from "@/components/blocks/team-preview/TeamPreview";

type BlockComponent = ComponentType<{ content: Record<string, unknown> }>;
const reg = (
  type: string,
  label: string,
  component: unknown,
  category = "kancelaria"
) =>
  registerComponent(component as unknown as BlockComponent, {
    type,
    label,
    category,
    props: {},
  });

reg("hero", "Hero", Hero);
reg("editorial-intro", "Editorial Intro", EditorialIntro);
reg("contact-cta", "Contact CTA", ContactCta);
reg("dossier-section", "Dossier Section", DossierSection);
reg("footer", "Footer", Footer);
reg("header", "Header", Header);
reg("page-hero", "Page Hero", PageHero);
reg("paper-callout", "Paper Callout", PaperCallout);
reg("stats-counter", "Stats Counter", StatsCounter);
reg("team-member", "Team Member", TeamMember);
reg("team-preview", "Team Preview", TeamPreview);
