interface EditorialIntroContent {
  kicker?: string;
  heading?: string;
  body?: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function EditorialIntro({
  content,
}: {
  content: EditorialIntroContent;
}) {
  const {
    kicker = "",
    heading = "",
    body = "",
    image = "",
    ctaLabel = "",
    ctaHref = "",
  } = content;

  return (
    <section className="services">
      <div className="container">
        <div className="sec-head">
          <div className="sec-head-meta">
            <span className="sec-head-num">—</span>
            {kicker ? <span className="sec-head-kicker">{kicker}</span> : null}
          </div>
          <div className="sec-head-body">
            {heading ? <h2 className="display-lg">{heading}</h2> : null}
            <div className="services-row">
              <div className="services-copy">
                {body ? (
                  <div dangerouslySetInnerHTML={{ __html: body }} />
                ) : null}
                {ctaLabel ? (
                  <a className="btn-text" href={ctaHref || "#"}>
                    {ctaLabel} →
                  </a>
                ) : null}
              </div>
              {image ? (
                <div className="services-img">
                  <img src={image} alt={heading} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorialIntro;
