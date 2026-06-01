interface CtaContent {
  badgeText?: string;
  heading?: string;
  headingLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

export function Cta({ content }: { content: CtaContent }) {
  const {
    badgeText = "",
    heading = "",
    headingLine2 = "",
    description = "",
    primaryButtonText = "",
    primaryButtonUrl = "#",
    secondaryButtonText = "",
    secondaryButtonUrl = "#",
  } = content;
  return (
    <section className="section section-cta">
      <div className="container container-narrow">
        {badgeText ? <span className="badge">{badgeText}</span> : null}
        <h2 className="display-md">
          {heading}
          {headingLine2 ? (
            <>
              <br />
              {headingLine2}
            </>
          ) : null}
        </h2>
        {description ? <p className="section-lead">{description}</p> : null}
        <div className="cta-buttons">
          {primaryButtonText ? (
            <a className="btn-primary" href={primaryButtonUrl || "#"}>
              {primaryButtonText}
            </a>
          ) : null}
          {secondaryButtonText ? (
            <a className="btn-text" href={secondaryButtonUrl || "#"}>
              {secondaryButtonText} →
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Cta;
