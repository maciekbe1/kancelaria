import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import type { BlockProps } from "@cmssy/react";
import { pageHeroProps } from "./block";

export default function PageHero({
  content,
}: BlockProps<typeof pageHeroProps>) {
  const { eyebrow = "", title = "", lead = "", image } = content;

  return (
    <section className="hero-band">
      {image?.url ? (
        <>
          <img
            className="hero-band-bg"
            src={image.url}
            alt=""
            aria-hidden="true"
          />
          <div className="hero-band-grad" />
        </>
      ) : null}

      <Container className="hero-band-inner">
        <Reveal>
          {eyebrow ? <p className="hero-band-kicker">{eyebrow}</p> : null}
          <h1 className="hero-band-title display-lg">{title}</h1>
          {lead ? <p className="hero-band-lead">{lead}</p> : null}
        </Reveal>
      </Container>
    </section>
  );
}
