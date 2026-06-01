import { CmssyPage } from "@cmssy/react";
import "@/cmssy/blocks";

const IMG =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600";
const PORTRAIT =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800";

const page = {
  id: "preview",
  blocks: [
    {
      id: "p-hero",
      type: "hero",
      content: {
        pl: {
          eyebrow: "Twoi doradcy w kryzysie",
          title: "Restrukturyzacje i upadłości",
          subtitle: "radcy prawni · licencjonowani doradcy restrukturyzacyjni",
          backgroundImage: IMG,
          indexLabel: "Specjalizacje",
          index: [
            {
              number: "01",
              label: "Postępowania restrukturyzacyjne",
              href: "#",
            },
            { number: "02", label: "Postępowanie upadłościowe", href: "#" },
            { number: "03", label: "Pomoc prawna dla dłużników", href: "#" },
          ],
        },
      },
    },
    {
      id: "p-stats",
      type: "stats-counter",
      content: {
        pl: {
          stats: [
            { value: 100, suffix: "+", label: "firm, którym pomogliśmy" },
            { value: 90, suffix: "%", label: "uchylonych zajęć" },
            { value: 10, suffix: " mln", label: "umorzonych długów" },
            {
              value: 150,
              suffix: "+",
              label: "przeprowadzonych restrukturyzacji",
            },
          ],
        },
      },
    },
    {
      id: "p-editorial",
      type: "editorial-intro",
      content: {
        pl: {
          kicker: "Nasze usługi",
          heading: "Kompleksowa pomoc prawna w kryzysie",
          body: "<p>Świadczymy kompleksową pomoc prawną w postępowaniach restrukturyzacyjnych i upadłościowych — to nasza wiodąca specjalizacja.</p><p>Reprezentujemy przedsiębiorców i osoby fizyczne na każdym etapie postępowania.</p>",
          image: IMG,
          ctaLabel: "Zobacz wszystkie specjalizacje",
          ctaHref: "#",
        },
      },
    },
    {
      id: "p-paper",
      type: "paper-callout",
      content: {
        pl: {
          salutation: "Przedsiębiorco,",
          body: "<p>nie musisz mierzyć się z kryzysem sam. Przeanalizujemy Twoją sytuację, dobierzemy właściwe postępowanie i poprowadzimy je od początku do końca.</p>",
          close: "Resztą zajmiemy się my.",
          signTag: "Twoi doradcy w kryzysie",
          signName: "Kancelaria Restrukturyzacje i Upadłości",
        },
      },
    },
    {
      id: "p-team",
      type: "team-preview",
      content: {
        pl: {
          eyebrow: "Zespół Kancelarii",
          heading: "Radcy prawni i doradcy restrukturyzacyjni",
          allLabel: "Poznaj zespół",
          members: [
            {
              name: "Wiktoria Danowska-Maćko",
              role: "Licencjonowany doradca restrukturyzacyjny i radca prawny",
              photo: PORTRAIT,
              href: "#",
            },
            {
              name: "Łukasz Zabłocki",
              role: "Licencjonowany doradca restrukturyzacyjny i radca prawny",
              photo: PORTRAIT,
              href: "#",
            },
            {
              name: "Anna Tomala",
              role: "Specjalista ds. restrukturyzacji i upadłości",
              photo: PORTRAIT,
              href: "#",
            },
          ],
        },
      },
    },
    {
      id: "p-contact",
      type: "contact-cta",
      content: {
        pl: {
          variant: "gold",
          eyebrow: "Konsultacje strategiczne",
          heading: "Skonsultuj swój przypadek",
          subtext:
            "Każda sytuacja wymaga indywidualnego podejścia. Nasi eksperci są gotowi do analizy Twojej sprawy.",
          primaryLabel: "Umów konsultację",
          primaryHref: "tel:+48725788344",
          secondaryLabel: "Napisz do nas",
          secondaryHref: "mailto:biuro@kancelaria-restrukturyzacje.pl",
        },
      },
    },
  ],
};

export default function PreviewPage() {
  return <CmssyPage page={page} locale="pl" defaultLocale="pl" />;
}
