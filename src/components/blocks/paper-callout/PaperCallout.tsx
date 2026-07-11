import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { BlockContent } from "./block";

export default function PaperCallout({ content }: { content: BlockContent }) {
  const {
    salutation = "",
    body = "",
    close = "",
    signTag = "",
    signName = "",
  } = content;

  return (
    <section className="paper-block paper-section">
      <Container>
        <Reveal className="letter">
          {salutation ? (
            <p className="letter-salutation">{salutation}</p>
          ) : null}
          {body ? (
            <div
              className="letter-body"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          ) : null}
          {close ? <p className="letter-close">{close}</p> : null}
          {(signTag || signName) ? (
            <div className="letter-sign">
              {signTag ? (
                <span className="letter-sign-tag">{signTag}</span>
              ) : null}
              {signName ? (
                <span className="letter-sign-name">{signName}</span>
              ) : null}
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
