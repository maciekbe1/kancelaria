import type { ComponentType } from "react";
import { fields, registerComponent, type FieldDefinition } from "@cmssy/react";
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
  props: Record<string, FieldDefinition> = {},
  opts: { category?: string; layoutPositions?: string[] } = {}
) =>
  registerComponent(component as unknown as BlockComponent, {
    type,
    label,
    category: opts.category ?? "kancelaria",
    props,
    ...(opts.layoutPositions ? { layoutPositions: opts.layoutPositions } : {}),
  });

reg("hero", "Hero", Hero, {
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
});
reg("editorial-intro", "Editorial Intro", EditorialIntro, {
  kicker: fields.singleLine({ label: "Nadtytuł" }),
  heading: fields.singleLine({ label: "Nagłówek" }),
  body: fields.richText({ label: "Treść" }),
  image: fields.media({ label: "Obraz" }),
  ctaLabel: fields.singleLine({ label: "Tekst przycisku" }),
  ctaHref: fields.link({ label: "Link przycisku" }),
});
reg("contact-cta", "Contact CTA", ContactCta, {
  variant: fields.select({ label: "Wariant", options: ["dark", "gold"] }),
  eyebrow: fields.singleLine({ label: "Nadtytuł" }),
  heading: fields.singleLine({ label: "Nagłówek" }),
  subtext: fields.multiLine({ label: "Tekst" }),
  primaryLabel: fields.singleLine({ label: "Przycisk główny - tekst" }),
  primaryHref: fields.link({ label: "Przycisk główny - link" }),
  secondaryLabel: fields.singleLine({ label: "Przycisk drugi - tekst" }),
  secondaryHref: fields.link({ label: "Przycisk drugi - link" }),
});
reg("dossier-section", "Dossier Section", DossierSection, {
  number: fields.singleLine({ label: "Numer" }),
  label: fields.singleLine({ label: "Etykieta" }),
  heading: fields.singleLine({ label: "Nagłówek" }),
  body: fields.richText({ label: "Treść" }),
  anchorId: fields.singleLine({ label: "ID kotwicy" }),
  tint: fields.boolean({ label: "Tło tonowane" }),
});
reg(
  "footer",
  "Footer",
  Footer,
  {
    brand: fields.singleLine({ label: "Marka" }),
    tagline: fields.singleLine({ label: "Hasło" }),
    email: fields.singleLine({ label: "E-mail" }),
    address: fields.multiLine({ label: "Adres" }),
    addressNote: fields.singleLine({ label: "Uwaga do adresu" }),
    mapsHref: fields.link({ label: "Link do map" }),
    copyright: fields.singleLine({ label: "Copyright" }),
    phones: fields.repeater({
      label: "Telefony",
      itemLabel: "{number}",
      addButtonLabel: "Dodaj telefon",
      itemSchema: { number: fields.singleLine({ label: "Numer" }) },
    }),
    infoLinks: fields.repeater({
      label: "Linki informacyjne",
      itemLabel: "{label}",
      addButtonLabel: "Dodaj link",
      itemSchema: {
        label: fields.singleLine({ label: "Etykieta" }),
        href: fields.link({ label: "Link" }),
      },
    }),
  },
  { layoutPositions: ["footer"] }
);
reg(
  "header",
  "Header",
  Header,
  {
    logo: fields.media({ label: "Logo" }),
    brand: fields.singleLine({ label: "Marka" }),
    email: fields.singleLine({ label: "E-mail" }),
    links: fields.repeater({
      label: "Linki nawigacji",
      itemLabel: "{label}",
      addButtonLabel: "Dodaj link",
      itemSchema: {
        label: fields.singleLine({ label: "Etykieta" }),
        href: fields.link({ label: "Link" }),
      },
    }),
    phones: fields.repeater({
      label: "Telefony",
      itemLabel: "{number}",
      addButtonLabel: "Dodaj telefon",
      itemSchema: { number: fields.singleLine({ label: "Numer" }) },
    }),
  },
  { layoutPositions: ["header"] }
);
reg("page-hero", "Page Hero", PageHero, {
  eyebrow: fields.singleLine({ label: "Nadtytuł" }),
  title: fields.singleLine({ label: "Tytuł" }),
  lead: fields.multiLine({ label: "Lead" }),
  image: fields.media({ label: "Obraz" }),
});
reg("paper-callout", "Paper Callout", PaperCallout, {
  salutation: fields.singleLine({ label: "Powitanie" }),
  body: fields.richText({ label: "Treść" }),
  close: fields.singleLine({ label: "Zakończenie" }),
  signTag: fields.singleLine({ label: "Podpis - etykieta" }),
  signName: fields.singleLine({ label: "Podpis - nazwa" }),
});
reg("stats-counter", "Stats Counter", StatsCounter, {
  stats: fields.repeater({
    label: "Statystyki",
    itemLabel: "{label}",
    addButtonLabel: "Dodaj statystykę",
    itemSchema: {
      value: fields.numeric({ label: "Wartość" }),
      suffix: fields.singleLine({ label: "Suffix" }),
      label: fields.singleLine({ label: "Etykieta" }),
    },
  }),
});
reg("team-member", "Team Member", TeamMember, {
  role: fields.singleLine({ label: "Stanowisko" }),
  name: fields.singleLine({ label: "Imię i nazwisko" }),
  bio: fields.richText({ label: "Bio" }),
  photo: fields.media({ label: "Zdjęcie" }),
  phone: fields.singleLine({ label: "Telefon" }),
  email: fields.singleLine({ label: "E-mail" }),
  reverse: fields.boolean({ label: "Odwróć układ" }),
  anchorId: fields.singleLine({ label: "ID kotwicy" }),
});
reg("team-preview", "Team Preview", TeamPreview, {
  eyebrow: fields.singleLine({ label: "Nadtytuł" }),
  heading: fields.singleLine({ label: "Nagłówek" }),
  allLabel: fields.singleLine({ label: "Etykieta 'wszyscy'" }),
  members: fields.repeater({
    label: "Członkowie",
    itemLabel: "{name}",
    addButtonLabel: "Dodaj osobę",
    itemSchema: {
      name: fields.singleLine({ label: "Imię i nazwisko" }),
      role: fields.singleLine({ label: "Stanowisko" }),
      photo: fields.media({ label: "Zdjęcie" }),
      href: fields.link({ label: "Link" }),
    },
  }),
});
