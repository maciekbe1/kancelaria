import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { BlockContent } from "./block";

export default function EditorialIntro({ content }: { content: BlockContent }) {
  const {
    kicker = "",
    heading = "",
    body = "",
    image = "",
    ctaLabel = "",
    ctaHref = "",
  } = content;

  return (
    <section className="services">
      <Container>
        <div className="sec-head">
          <div className="sec-head-meta">
            <span className="sec-head-num">—</span>
            {kicker ? <span className="sec-head-kicker">{kicker}</span> : null}
          </div>
          <div className="sec-head-body">
            {heading ? (
              <Reveal as="h2" className="display-lg">
                {heading}
              </Reveal>
            ) : null}
            <div className="services-row">
              <Reveal delay={0.12} className="services-copy">
                {body ? (
                  <div dangerouslySetInnerHTML={{ __html: body }} />
                ) : null}
                {ctaLabel ? (
                  <a className="btn-text" href={ctaHref || "#"}>
                    {ctaLabel} →
                  </a>
                ) : null}
              </Reveal>
              {image ? (
                <Reveal delay={0.2} className="services-img">
                  <img src={image} alt={heading} />
                </Reveal>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
