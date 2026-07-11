import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { BlockContent } from "./block";

export default function ContactCta({ content }: { content: BlockContent }) {
  const {
    variant = "dark",
    eyebrow = "",
    heading = "",
    subtext = "",
    primaryLabel = "",
    primaryHref = "",
    secondaryLabel = "",
    secondaryHref = "",
  } = content;

  const isGold = variant === "gold";

  const sectionClass = isGold
    ? "bg-secondary text-on-secondary"
    : "bg-surface text-on-surface";
  const eyebrowClass = isGold ? "text-on-secondary/80" : "text-secondary";
  const headingClass = isGold ? "text-on-secondary" : "text-paper";
  const primaryClass = isGold
    ? "bg-on-secondary text-secondary hover:scale-105"
    : "bg-paper text-ink hover:bg-secondary";
  const secondaryClass = isGold
    ? "border-2 border-on-secondary text-on-secondary hover:bg-on-secondary hover:text-secondary"
    : "border border-secondary text-secondary hover:bg-secondary hover:text-ink";

  return (
    <section className={`py-stack-lg ${sectionClass}`}>
      <Container>
        <Reveal className="max-w-3xl mx-auto text-center">
          {eyebrow ? (
            <span
              className={`font-meta text-meta uppercase tracking-widest block mb-4 ${eyebrowClass}`}
            >
              {eyebrow}
            </span>
          ) : null}
          {heading ? (
            <h2 className={`font-display-lg text-display-lg mb-8 ${headingClass}`}>
              {heading}
            </h2>
          ) : null}
          {subtext ? (
            <p className="font-h3 text-h3 mb-10 opacity-90">{subtext}</p>
          ) : null}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {primaryLabel ? (
              <a
                href={primaryHref || "#"}
                className={`px-10 py-5 font-bold font-meta text-meta uppercase tracking-widest transition-all duration-300 ${primaryClass}`}
              >
                {primaryLabel}
              </a>
            ) : null}
            {secondaryLabel ? (
              <a
                href={secondaryHref || "#"}
                className={`px-10 py-5 font-bold font-meta text-meta uppercase tracking-widest transition-all duration-300 ${secondaryClass}`}
              >
                {secondaryLabel}
              </a>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
