import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { BlockContent } from "./block";

type Member = { name: string; role?: string; photo?: string; href?: string };

export default function TeamPreview({ content }: { content: BlockContent }) {
  const { eyebrow = "", heading = "", allLabel = "" } = content;
  const members = (content.members ?? []) as Member[];

  return (
    <section className="team-preview">
      <Container>
        <div className="sec-head">
          <div className="sec-head-meta">
            <span className="sec-head-num">—</span>
            {eyebrow ? <span className="sec-head-kicker">{eyebrow}</span> : null}
          </div>
          <div className="sec-head-body">
            {heading ? (
              <Reveal as="h2" className="display-lg">
                {heading}
              </Reveal>
            ) : null}
          </div>
        </div>

        <div className="team-grid">
          {members.map((m, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)} className="team-mini">
              <div className="team-mini-photo">
                {m.photo ? <img src={m.photo} alt={m.name} /> : null}
              </div>
              {m.role ? <span className="team-mini-spec">{m.role}</span> : null}
              <h3 className="team-mini-name">{m.name}</h3>
              {m.href && allLabel ? (
                <a className="btn-text" href={m.href}>
                  {allLabel} →
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
