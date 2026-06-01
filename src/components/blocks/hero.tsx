interface HeroContent {
  heading?: string;
  headingHighlight?: string;
  subheading?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaUrl?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
}

export function Hero({ content }: { content: HeroContent }) {
  const {
    heading = "",
    headingHighlight = "",
    subheading = "",
    showCta = false,
    ctaText = "",
    ctaUrl = "#",
    primaryButtonText = "",
    primaryButtonUrl = "#",
  } = content;

  const buttonText = primaryButtonText || (showCta ? ctaText : "");
  const buttonUrl = primaryButtonText ? primaryButtonUrl : ctaUrl;

  return (
    <section className="hero">
      <div className="container">
        {heading || headingHighlight ? (
          <h1 className="display-lg">
            {heading}{" "}
            {headingHighlight ? (
              <span style={{ color: "var(--gold)" }}>{headingHighlight}</span>
            ) : null}
          </h1>
        ) : null}
        {subheading ? <p className="hero-sub">{subheading}</p> : null}
        {buttonText ? (
          <a className="btn-text" href={buttonUrl || "#"}>
            {buttonText} →
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default Hero;
