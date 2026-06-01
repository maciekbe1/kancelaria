import { fields, registerComponent } from "@cmssy/react";
import { EditorialIntro } from "@/components/blocks/editorial-intro";

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
