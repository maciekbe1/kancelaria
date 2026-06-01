import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { BlockContent } from "./block";

export default function TeamMember({ content }: { content: BlockContent }) {
  const {
    role = "",
    name = "",
    bio = "",
    photo = "",
    phone = "",
    email = "",
    reverse = false,
    anchorId = "",
  } = content;

  return (
    <section className="paper-section" id={anchorId || undefined}>
      <Container>
        <Reveal className={`agent${reverse ? " agent--flip" : ""}`}>
          <div className="agent-photo">
            {photo ? <img src={photo} alt={name} /> : null}
          </div>
          <div className="agent-content">
            {role ? <span className="agent-spec">{role}</span> : null}
            <h2 className="agent-name">{name}</h2>
            {bio ? (
              <div
                className="agent-body"
                dangerouslySetInnerHTML={{ __html: bio }}
              />
            ) : null}
            {(phone || email) ? (
              <div className="agent-contact">
                {phone ? (
                  <div className="agent-ct">
                    <span className="agent-ct-l">Telefon</span>
                    <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
                  </div>
                ) : null}
                {email ? (
                  <div className="agent-ct">
                    <span className="agent-ct-l">E-mail</span>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
