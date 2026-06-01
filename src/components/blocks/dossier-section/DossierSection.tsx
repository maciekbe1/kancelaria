import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { BlockContent } from "./block";

export default function DossierSection({ content }: { content: BlockContent }) {
  const { number = "", heading = "", body = "", anchorId = "" } = content;

  return (
    <section className="act" id={anchorId || undefined}>
      <Container>
        <Reveal className="act-inner">
          <div className="act-head">
            {number ? <span className="act-num">{number}</span> : null}
            {heading ? <h2 className="act-title">{heading}</h2> : null}
          </div>
          {body ? (
            <div
              className="act-body"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
