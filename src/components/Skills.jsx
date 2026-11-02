import { shared } from "../content";

// Skills section is intentionally static (no animations)
export default function Skills({ t }) {
  return (
    <section id="skills" className="section section--ink">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <span className="eyebrow__bar" style={{ background: "#1F9AFF" }} />
            {t.skillsEyebrow}
          </span>
          <h2 className="h2 display is-light">{t.skillsTitle}</h2>
        </div>

        <div className="skills">
          {t.skillGroups.map((name, i) => {
            const color = shared.skillColors[i];
            return (
              <div key={name} className="skill-group">
                <div className="skill-group__head">
                  <span className="skill-group__dot" style={{ background: color }} aria-hidden="true" />
                  <h3>{name}</h3>
                </div>
                <div className="skill-group__items">
                  {shared.skillItems[i].map((s) => (
                    <span key={s} className="skill" dir="ltr" style={{ background: color }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="soft">
          <span className="soft__title">{t.softTitle}</span>
          {t.soft.map((s) => (
            <span key={s} className="soft__item">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
