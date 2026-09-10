import { Container } from "@/components/container";
import { LogoMark } from "@/components/logo-mark";
import type { BlockProps } from "@cmssy/react";
import { footerProps } from "./block";

const tel = (n: string) => `tel:${n.replace(/\s+/g, "")}`;

export default function Footer({ content }: BlockProps<typeof footerProps>) {
  const {
    brand = "Kancelaria Restrukturyzacje",
    tagline = "",
    email = "",
    address = "",
    addressNote = "",
    mapsHref = "",
    copyright = "",
  } = content;
  const phones = (content.phones ?? []).flatMap((p) =>
    p.number ? [p.number] : []
  );
  const infoLinks = content.infoLinks ?? [];

  const [brandHead, ...brandRest] = brand.split(" ");
  const brandTail = brandRest.join(" ");

  return (
    <footer className="footer">
      <Container className="footer-inner">
        <div className="footer-brand">
          <a href="/" className="logo">
            <LogoMark />
            <span className="logo-word">
              {brandHead}
              {brandTail ? (
                <>
                  <br />
                  <span className="logo-word-2">{brandTail}</span>
                </>
              ) : null}
            </span>
          </a>
          {tagline ? <p className="footer-tag">{tagline}</p> : null}
        </div>

        <div className="footer-col">
          <div className="footer-h">Kontakt</div>
          {phones.map((number, i) => (
            <a key={i} href={tel(number)}>
              {number}
            </a>
          ))}
          {email ? <a href={`mailto:${email}`}>{email}</a> : null}
        </div>

        <div className="footer-col">
          <div className="footer-h">Biuro</div>
          {address ? (
            mapsHref ? (
              <a href={mapsHref} target="_blank" rel="noreferrer">
                {address}
              </a>
            ) : (
              <span>{address}</span>
            )
          ) : null}
          {addressNote ? (
            <span className="footer-note">{addressNote}</span>
          ) : null}
        </div>
      </Container>

      <Container className="footer-bottom">
        <span>{copyright}</span>
        <span>
          {infoLinks.map((l, i) => (
            <a key={i} href={l.href}>
              {l.label}
            </a>
          ))}
        </span>
      </Container>
    </footer>
  );
}
