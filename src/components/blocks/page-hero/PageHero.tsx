import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { BlockContent } from "./block";

export default function PageHero({ content }: { content: BlockContent }) {
  const { eyebrow = "", title = "", lead = "", image = "" } = content;

  return (
    <section className="hero-band">
      {image ? (
        <>
          <img className="hero-band-bg" src={image} alt="" aria-hidden="true" />
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
