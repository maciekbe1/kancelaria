interface FaqItem {
  question?: string;
  answer?: string;
}
interface FaqContent {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  faqs?: FaqItem[];
}

export function Faq({ content }: { content: FaqContent }) {
  const {
    heading = "",
    headingHighlight = "",
    description = "",
    faqs = [],
  } = content;
  return (
    <section className="section">
      <div className="container container-narrow">
        <h2 className="display-md">
          {heading}{" "}
          {headingHighlight ? (
            <span style={{ color: "var(--gold)" }}>{headingHighlight}</span>
          ) : null}
        </h2>
        {description ? <p className="section-lead">{description}</p> : null}
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <h3>{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
