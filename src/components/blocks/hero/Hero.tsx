import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { BlockContent } from "./block";

type IndexItem = { number: string; label: string; href?: string };

export default function Hero({ content }: { content: BlockContent }) {
  const {
    eyebrow = "",
    title = "",
    subtitle = "",
    backgroundImage = "",
    indexLabel = "Specjalizacje",
  } = content;
  const index = (content.index ?? []) as IndexItem[];

  return (
    <section className="hero">
      {backgroundImage ? (
        <>
          <img className="hero-bg" src={backgroundImage} alt="" aria-hidden="true" />
          <div className="hero-grad" />
        </>
      ) : null}

      <Container className="hero-inner">
        <Reveal className="hero-col">
          {eyebrow ? <p className="hero-tagline">{eyebrow}</p> : null}
          <h1 className="hero-title">{title}</h1>
          <div className="hero-rule" />
          {subtitle ? <p className="hero-sub">{subtitle}</p> : null}
        </Reveal>

        {index.length ? (
          <Reveal delay={0.3} className="hero-index">
            {indexLabel ? (
              <span className="hero-index-label">{indexLabel}</span>
            ) : null}
            <ul>
              {index.map((item, i) => (
                <li key={i}>
                  <a className="hi-link" href={item.href || "#"}>
                    <span className="hi-num">{item.number}</span>
                    <span className="hi-title">{item.label}</span>
                    <span className="hi-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
