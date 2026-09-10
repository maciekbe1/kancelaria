import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import type { BlockProps } from "@cmssy/react";
import { heroProps } from "./block";

export default function Hero({ content }: BlockProps<typeof heroProps>) {
  const {
    eyebrow = "",
    title = "",
    subtitle = "",
    backgroundImage,
    indexLabel = "Specjalizacje",
  } = content;
  const index = content.index ?? [];

  return (
    <section className="hero">
      {backgroundImage?.url ? (
        <>
          <img
            className="hero-bg"
            src={backgroundImage.url}
            alt=""
            aria-hidden="true"
          />
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
