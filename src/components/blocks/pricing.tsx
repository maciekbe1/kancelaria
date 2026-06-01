interface Plan {
  name?: string;
  description?: string;
  price?: string;
  period?: string;
  popular?: boolean;
  features?: { feature?: string }[];
  cta?: string;
  href?: string;
}
interface PricingContent {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  trialNotice?: string;
  plans?: Plan[];
}

export function Pricing({ content }: { content: PricingContent }) {
  const {
    heading = "",
    headingHighlight = "",
    description = "",
    trialNotice = "",
    plans = [],
  } = content;
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="display-md">
          {heading}{" "}
          {headingHighlight ? (
            <span style={{ color: "var(--gold)" }}>{headingHighlight}</span>
          ) : null}
        </h2>
        {description ? <p className="section-lead">{description}</p> : null}
        <div className="grid-3">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`card price-card${p.popular ? " popular" : ""}`}
            >
              <h3>{p.name}</h3>
              <div className="price">{p.price}</div>
              <div className="price-period">{p.period}</div>
              <p>{p.description}</p>
              <ul>
                {(p.features ?? []).map((f, j) => (
                  <li key={j}>{f.feature}</li>
                ))}
              </ul>
              {p.cta ? (
                <a className="btn-text" href={p.href || "#"}>
                  {p.cta} →
                </a>
              ) : null}
            </div>
          ))}
        </div>
        {trialNotice ? <p className="section-note">{trialNotice}</p> : null}
      </div>
    </section>
  );
}

export default Pricing;
