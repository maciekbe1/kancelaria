interface Feature {
  title?: string;
  description?: string;
  icon?: string;
}
interface FeaturesContent {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  features?: Feature[];
}

export function Features({ content }: { content: FeaturesContent }) {
  const {
    heading = "",
    headingHighlight = "",
    description = "",
    features = [],
  } = content;
  return (
    <section className="section">
      <div className="container">
        <h2 className="display-md">
          {heading}{" "}
          {headingHighlight ? (
            <span style={{ color: "var(--gold)" }}>{headingHighlight}</span>
          ) : null}
        </h2>
        {description ? <p className="section-lead">{description}</p> : null}
        <div className="grid-2">
          {features.map((f, i) => (
            <div key={i} className="card">
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
