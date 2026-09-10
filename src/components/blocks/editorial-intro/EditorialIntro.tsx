import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import type { BlockProps } from "@cmssy/react";
import { editorialIntroProps } from "./block";

export default function EditorialIntro({
  content,
}: BlockProps<typeof editorialIntroProps>) {
  const {
    kicker = "",
    heading = "",
    body = "",
    image,
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
              {image?.url ? (
                <Reveal delay={0.2} className="services-img">
                  <img src={image.url} alt={image.alt ?? heading} />
                </Reveal>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
